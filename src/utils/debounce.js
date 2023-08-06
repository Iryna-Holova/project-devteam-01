export function debounce(func, wait) {
  let lastCall = null;
  let lastCallTimer = null;
  return function perform(...args) {
    // console.log(lastCall, lastCallTimer);
    const previousCall = lastCall;

    lastCall = Date.now();

    //console.log(lastCall, lastCallTimer);

    if (previousCall && lastCall - previousCall <= wait) {
      clearTimeout(lastCallTimer);
    }

    lastCallTimer = setTimeout(() => func(...args), wait);
  };
}

export default debounce;
