import { useState } from 'react';

export function useJobAnalysis() {
  const [inputText, setInputText] = useState('');
  
  const clearInput = () => setInputText('');
  
  const triggerAnalysis = () => {
    if (!inputText.trim()) return;
    console.log("Analyzing full description setup...", inputText);
  };

  return {
    inputText,
    setInputText,
    clearInput,
    triggerAnalysis
  };
}