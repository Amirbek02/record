export function formatTime(time: number): string {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  // Calculate hours, minutes, and seconds
  hours = Math.floor(time / 3600); // Full hours
  minutes = Math.floor((time % 3600) / 60); // Remaining minutes
  seconds = Math.round(time % 60); // Remaining seconds

  // Format hours, minutes, and seconds to always be two digits
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  // Return time in HH:MM:SS format
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
