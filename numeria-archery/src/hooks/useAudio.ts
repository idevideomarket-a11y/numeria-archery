import { useCallback, useRef } from 'react';
import { useGameStore } from '../store/gameStore';

export function useAudio() {
  const { soundEnabled, volume } = useGameStore();
  const audioRefs = useRef<Map<string, HTMLAudioElement>>(new Map());

  const playSound = useCallback((soundName: string) => {
    if (!soundEnabled) return;

    // For MVP, we'll use Web Audio API beeps instead of actual audio files
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const frequencies: Record<string, number> = {
      'correct': 880,    // A5
      'wrong': 220,      // A3
      'click': 440,      // A4
      'star': 1320,      // E6
      'complete': 660,   // E5
      'shoot': 550,      // C#5
    };

    const freq = frequencies[soundName] || 440;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = freq;
    oscillator.type = soundName === 'wrong' ? 'sawtooth' : 'sine';
    
    gainNode.gain.setValueAtTime(volume * 0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  }, [soundEnabled, volume]);

  return { playSound };
}
