export default function(unformattedDate){
  let now = Date.now();
  let datetime = Date.parse(unformattedDate)
  let diff = now - datetime;

  switch(true){
    case Math.floor(diff/1000) < 60:
      let seconds = Math.floor(diff/1000)
      return seconds === 1 ? seconds + " second ago" : seconds + " seconds ago"
    case Math.floor(diff/60000) < 60:
      let minutes = Math.floor(diff/60000)
      return minutes === 1 ? minutes + " minute ago" : minutes + " minutes ago"
    case Math.floor(diff/3600000) < 24:
      let hours = Math.floor(diff/3600000)
      return hours === 1 ? hours + " hour ago" : hours + " hours ago"
    case Math.floor(diff/86400000) < 7:
      let days = Math.floor(diff/86400000)
      return days === 1 ? days + " day ago" : days + " days ago"
    default:
      let date = new Date(datetime);
      let mon;
      switch(date.getUTCMonth()){
        case 0:
          mon = "Jan";
          break;
        case 1:
          mon = "Feb";
          break;
        case 2:
          mon = "Mar";
          break;
        case 3:
          mon = "Apr";
          break;
        case 4:
          mon = "May";
          break;
        case 5:
          mon = "Jun";
          break;
        case 6:
          mon = "July";
          break;
        case 7:
          mon = "Aug";
          break;
        case 8:
          mon = "Sep";
          break;
        case 9:
          mon = "Oct";
          break;
        case 10:
          mon = "Nov";
          break;
        case 11:
        default:
          mon = "Dec";
          break;
      }
      let year = date.getUTCFullYear();
      let needYear = new Date(now).getUTCFullYear() !== year ? `, ${year}` : '';
      return `${mon} ${date.getUTCDate()}${needYear}`;
  }
}
