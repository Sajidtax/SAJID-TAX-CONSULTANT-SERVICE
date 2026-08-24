export function getOfficeStatus(): { isOpen: boolean; text: string; detail: string } {
  try {
    // Determine Indian Standard Time (UTC + 5:30)
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const istOffset = 5.5 * 3600000;
    const istDate = new Date(utcTime + istOffset);

    const day = istDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hours = istDate.getHours();
    const minutes = istDate.getMinutes();
    const currentDecimalTime = hours + minutes / 60;

    // Mon (1) to Sat (6), 11:00 AM (11.0) to 7:00 PM (19.0)
    if (day >= 1 && day <= 6) {
      if (currentDecimalTime >= 11 && currentDecimalTime < 19) {
        return {
          isOpen: true,
          text: "Open Now",
          detail: "Closes at 7:00 PM IST"
        };
      } else if (currentDecimalTime < 11) {
        return {
          isOpen: false,
          text: "Opens at 11:00 AM",
          detail: "Mon-Sat, 11:00 AM - 7:00 PM"
        };
      } else {
        return {
          isOpen: false,
          text: "Closed for Today",
          detail: "Opens tomorrow at 11:00 AM"
        };
      }
    } else {
      // Sunday
      return {
        isOpen: false,
        text: "Closed on Sunday",
        detail: "Opens Monday at 11:00 AM"
      };
    }
  } catch {
    return {
      isOpen: true,
      text: "Mon-Sat: 11 AM - 7 PM",
      detail: "Sunday Closed"
    };
  }
}
