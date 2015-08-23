import { INPUT_FOCUSED, INPUT_BLURRED, INPUT_CHANGED,
         UPDATE_FOCUSED_SUGGESTION } from './constants';

export function inputFocused() {
  return {
    type: INPUT_FOCUSED
  };
}

export function inputBlurred() {
  return {
    type: INPUT_BLURRED
  };
}

export function inputChanged() {
  return {
    type: INPUT_CHANGED
  };
}

export function updateFocusedSuggestion(sectionIndex, suggestionIndex, value) {
  return {
    type: UPDATE_FOCUSED_SUGGESTION,
    sectionIndex,
    suggestionIndex,
    value
  };
}
