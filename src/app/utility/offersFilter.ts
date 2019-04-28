import { IJobs } from '../redux/jobs/jobs-types';

export function search(data: IJobs[], languages: string[]) {
  if (languages.length === 0) {
    return data;
  }
  return data.filter((el: IJobs) => languages.includes(el.marker_icon));
}
