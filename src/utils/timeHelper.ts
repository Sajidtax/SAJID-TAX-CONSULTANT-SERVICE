export function getOfficeStatus(): { isOpen: boolean; text: string; detail: string } {
  try {
    // Accurately determine Indian Standard Time (Asia/Kolkata) regardless of visitor's local timezone
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hourCycle: 'h23',
    });

    const parts = formatter.formatToParts(now);
    let weekday = '';
    let hours = 0;
    let minutes = 0;

    for (const part of parts) {
      if (part.type === 'weekday') weekday = part.value;
      if (part.type === 'hour') hours = parseInt(part.value, 10);
      if (part.type === 'minute') minutes = parseInt(part.value, 10);
    }

    const isSunday = weekday === 'Sun';
    const isSaturday = weekday === 'Sat';
    const currentDecimalTime = hours + minutes / 60;

    // Mon to Sat, 11:00 AM (11.0) to 7:00 PM (19.0) IST
    if (!isSunday) {
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
        // After 7:00 PM
        const isSaturday = day === 6;
        return {
          isOpen: false,
          text: "Closed for Today",
          detail: isSaturday ? "Opens Monday at 11:00 AM" : "Opens tomorrow at 11:00 AM"
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
