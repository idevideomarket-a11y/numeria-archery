import { useCallback } from 'react';
import { useGameStore } from '../store/gameStore';

export function useAudio() {
  const { soundEnabled, volume } = useGameStore();

  const playSound = useCallback((soundName: string) => {
    if (!soundEnabled) return;

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const frequencies: Record<string, number> = {
      'correct': 880,
      'wrong': 220,
      'click': 440,
      'star': 1320,
      'complete': 660,
      'shoot': 550,
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
