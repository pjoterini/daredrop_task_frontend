export const hasNotVotedBefore = (streamerId: string, stringValue: string) => {
  if (!localStorage.getItem(streamerId)) {
    localStorage.setItem(streamerId, stringValue);
  }
};

export const hasVotedSame = (streamerId: string, stringValue: string) => {
  if (localStorage.getItem(streamerId) === stringValue) {
    return true;
  }
};

export const hasVotedDifferent = (streamerId: string, stringValue: string) => {
  if (localStorage.getItem(streamerId) === 'true' && stringValue === 'false') {
    localStorage.setItem(streamerId, stringValue);
  } else if (localStorage.getItem(streamerId) === 'false' && stringValue === 'true') {
    localStorage.setItem(streamerId, stringValue);
  }
};
