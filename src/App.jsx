import { useState, useEffect, useRef } from 'react'
import { convertToSlangHybrid } from './hybridConverter'
import { convertToCanadianHockeySlangHybrid } from './hybridConverter'

function App() {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [convertedText, setConvertedText] = useState('')
  const [error, setError] = useState('')
  const [slangType, setSlangType] = useState('snowboard') // 'snowboard' or 'canadian-hockey'
  const [useAPI, setUseAPI] = useState(true) // Toggle for API usage
  const [isConverting, setIsConverting] = useState(false) // Loading state for API calls
  const recognitionRef = useRef(null)

  useEffect(() => {
    // Check if browser supports Web Speech API
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    
    if (!SpeechRecognition) {
      setError('Your browser does not support speech recognition. Please use Chrome, Edge, or Safari.')
      return
    }

    // Initialize speech recognition
    const recognition = new SpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = 'en-US'

    recognition.onstart = () => {
      setIsListening(true)
      setError('')
    }

    recognition.onresult = async (event) => {
      const transcript = event.results[0][0].transcript
      setTranscript(transcript)
      setIsConverting(true)
      try {
        const slang = slangType === 'snowboard' 
          ? await convertToSlangHybrid(transcript, useAPI)
          : await convertToCanadianHockeySlangHybrid(transcript, useAPI)
        setConvertedText(slang)
      } catch (err) {
        console.error('Conversion error:', err)
        // Fallback to local conversion on error
        const slang = slangType === 'snowboard' 
          ? await convertToSlangHybrid(transcript, false)
          : await convertToCanadianHockeySlangHybrid(transcript, false)
        setConvertedText(slang)
      } finally {
        setIsConverting(false)
        setIsListening(false)
      }
    }

    recognition.onerror = (event) => {
      setError(`Speech recognition error: ${event.error}`)
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognitionRef.current = recognition

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [])

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setTranscript('')
      setConvertedText('')
      recognitionRef.current.start()
    }
  }

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop()
    }
  }

  const handleTextChange = async (e) => {
    const text = e.target.value
    setTranscript(text)
    setIsConverting(true)
    try {
      const slang = slangType === 'snowboard'
        ? await convertToSlangHybrid(text, useAPI)
        : await convertToCanadianHockeySlangHybrid(text, useAPI)
      setConvertedText(slang)
    } catch (err) {
      console.error('Conversion error:', err)
      // Fallback to local conversion on error
      const slang = slangType === 'snowboard'
        ? await convertToSlangHybrid(text, false)
        : await convertToCanadianHockeySlangHybrid(text, false)
      setConvertedText(slang)
    } finally {
      setIsConverting(false)
    }
  }

  const handleSlangTypeChange = async (type) => {
    setSlangType(type)
    // Reconvert current text with new dictionary
    if (transcript) {
      setIsConverting(true)
      try {
        const slang = type === 'snowboard'
          ? await convertToSlangHybrid(transcript, useAPI)
          : await convertToCanadianHockeySlangHybrid(transcript, useAPI)
        setConvertedText(slang)
      } catch (err) {
        console.error('Conversion error:', err)
        const slang = type === 'snowboard'
          ? await convertToSlangHybrid(transcript, false)
          : await convertToCanadianHockeySlangHybrid(transcript, false)
        setConvertedText(slang)
      } finally {
        setIsConverting(false)
      }
    }
  }

  const getTitle = () => {
    if (slangType === 'canadian-hockey') {
      return '🇨🇦 Canadian & Hockey Slang Converter'
    }
    return '🏂 Snowboard Slang Converter'
  }

  const getDescription = () => {
    if (slangType === 'canadian-hockey') {
      return 'Speak or type to convert your words into Canadian and hockey slang'
    }
    return 'Speak or type to convert your words into snowboard slang'
  }

  const getGradientColors = () => {
    if (slangType === 'canadian-hockey') {
      return 'from-red-50 to-red-100'
    }
    return 'from-blue-50 to-cyan-100'
  }

  const getTitleGradient = () => {
    if (slangType === 'canadian-hockey') {
      return 'from-red-600 to-red-800'
    }
    return 'from-blue-600 to-cyan-600'
  }

  const getBorderColor = () => {
    if (slangType === 'canadian-hockey') {
      return 'border-red-300'
    }
    return 'border-blue-300'
  }

  const getBgGradient = () => {
    if (slangType === 'canadian-hockey') {
      return 'from-red-50 to-red-100'
    }
    return 'from-blue-50 to-cyan-50'
  }

  const getTextColor = () => {
    if (slangType === 'canadian-hockey') {
      return 'text-red-700'
    }
    return 'text-blue-700'
  }

  const getButtonColor = () => {
    if (slangType === 'canadian-hockey') {
      return 'bg-red-600 hover:bg-red-700'
    }
    return 'bg-blue-600 hover:bg-blue-700'
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getGradientColors()} flex items-center justify-center p-4`}>
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className={`text-4xl font-bold text-center mb-2 bg-gradient-to-r ${getTitleGradient()} bg-clip-text text-transparent`}>
          {getTitle()}
        </h1>
        <p className="text-center text-gray-600 mb-4">
          {getDescription()}
        </p>

        {/* Slang Type Selector */}
        <div className="mb-6 space-y-3">
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => handleSlangTypeChange('snowboard')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                slangType === 'snowboard'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🏂 Snowboard
            </button>
            <button
              onClick={() => handleSlangTypeChange('canadian-hockey')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                slangType === 'canadian-hockey'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🇨🇦 Canadian/Hockey
            </button>
          </div>
          
          {/* API Toggle */}
          <div className="flex items-center justify-center gap-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={useAPI}
                onChange={(e) => {
                  setUseAPI(e.target.checked)
                  if (transcript) {
                    handleTextChange({ target: { value: transcript } })
                  }
                }}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">
                Enable API lookups (Urban Dictionary)
              </span>
            </label>
            {isConverting && (
              <span className="text-sm text-gray-500 animate-pulse">🔄 Looking up...</span>
            )}
          </div>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        <div className="space-y-6">
          {/* Speech Input Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Speech Input
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={isListening ? stopListening : startListening}
                disabled={!!error}
                className={`flex-1 py-4 px-6 rounded-lg font-semibold text-white transition-all ${
                  isListening
                    ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                    : getButtonColor()
                } disabled:bg-gray-400 disabled:cursor-not-allowed`}
              >
                {isListening ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                    Listening... Click to Stop
                  </span>
                ) : (
                  '🎤 Click to Speak'
                )}
              </button>
            </div>
          </div>

          {/* Text Input Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Or Type Here
            </label>
            <textarea
              value={transcript}
              onChange={handleTextChange}
              placeholder="Type your text here..."
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
              rows="3"
            />
          </div>

          {/* Original Text Display */}
          {transcript && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                You Said:
              </label>
              <div className="p-4 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-800">
                {transcript}
              </div>
            </div>
          )}

          {/* Converted Slang Display */}
          {convertedText && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {slangType === 'canadian-hockey' ? 'In Canadian/Hockey Slang:' : 'In Snowboard Slang:'}
              </label>
              <div className={`p-4 bg-gradient-to-r ${getBgGradient()} border-2 ${getBorderColor()} rounded-lg`}>
                <p className={`text-2xl font-bold ${getTextColor()}`}>{convertedText}</p>
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className={`mt-8 p-4 ${slangType === 'canadian-hockey' ? 'bg-red-50 border-red-200' : 'bg-blue-50 border-blue-200'} rounded-lg border`}>
            <p className={`text-sm ${slangType === 'canadian-hockey' ? 'text-red-800' : 'text-blue-800'}`}>
              <strong>💡 Tip:</strong> Click the microphone button and speak clearly. 
              The app will convert common words and phrases into {slangType === 'canadian-hockey' ? 'Canadian and hockey slang' : 'snowboard slang'}. 
              You can also type directly in the text box for instant conversion. Switch between slang types using the buttons above.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

