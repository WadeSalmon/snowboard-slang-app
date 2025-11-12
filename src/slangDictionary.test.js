import { describe, it, expect } from 'vitest'
import { convertToSlang } from './slangDictionary'

describe('convertToSlang', () => {
  it('should return empty string for empty input', () => {
    expect(convertToSlang('')).toBe('')
    expect(convertToSlang(null)).toBe('')
    expect(convertToSlang(undefined)).toBe('')
  })

  it('should convert single words', () => {
    expect(convertToSlang('hello')).toBe('Yo')
    expect(convertToSlang('cool')).toBe('Sick')
    expect(convertToSlang('awesome')).toBe('Gnarly')
    expect(convertToSlang('snowboard')).toBe('Stick')
    expect(convertToSlang('snow')).toBe('Pow')
    expect(convertToSlang('friend')).toBe('Bro')
  })

  it('should convert multi-word phrases', () => {
    expect(convertToSlang('thank you')).toBe('Props')
    expect(convertToSlang('ski lift')).toBe('Chair')
    expect(convertToSlang('send it')).toBe('Send it')
  })

  it('should handle phrases before single words', () => {
    expect(convertToSlang('thank you friend')).toBe('Props Bro')
    expect(convertToSlang('hello thank you')).toBe('Yo Props')
  })

  it('should preserve punctuation', () => {
    expect(convertToSlang('hello!')).toBe('Yo!')
    expect(convertToSlang('cool.')).toBe('Sick.')
    expect(convertToSlang('awesome?')).toBe('Gnarly?')
    expect(convertToSlang('thank you!')).toBe('Props!')
  })

  it('should handle case insensitivity', () => {
    expect(convertToSlang('HELLO')).toBe('Yo')
    expect(convertToSlang('Hello')).toBe('Yo')
    expect(convertToSlang('THANK YOU')).toBe('Props')
    expect(convertToSlang('Thank You')).toBe('Props')
  })

  it('should handle sentences with multiple conversions', () => {
    expect(convertToSlang('hello friend')).toBe('Yo Bro')
    expect(convertToSlang('that was awesome')).toBe('that was Gnarly')
    expect(convertToSlang('thanks buddy')).toBe('Props Bro')
  })

  it('should not convert words not in dictionary', () => {
    expect(convertToSlang('random word')).toBe('random word')
    expect(convertToSlang('hello random')).toBe('Yo random')
  })

  it('should handle longer phrases correctly', () => {
    expect(convertToSlang('thank you very much')).toBe('Props very much')
    expect(convertToSlang('the ski lift is cool')).toBe('the Chair is Sick')
  })

  it('should handle words that are part of phrases', () => {
    // "send it" is a phrase, "fast" should convert to "Send it"
    expect(convertToSlang('send it fast')).toBe('Send it Send it')
    // "thanks" should convert to "Props"
    expect(convertToSlang('thanks')).toBe('Props')
  })

  it('should handle multiple spaces', () => {
    expect(convertToSlang('hello   friend')).toBe('Yo Bro')
    expect(convertToSlang('thank  you')).toBe('Props')
  })
})

