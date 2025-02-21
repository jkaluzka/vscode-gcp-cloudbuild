/*
Copyright 2019 by Sylvain Nieuwlandt
   
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/** 
 * Difference between will return the time elapsed between the first given date and second one in minutes.
 * 
 * @param date1 the start point used for checking the time elapsed
 * @param date2 the end point used for checking the time elapsed
 * @returns the time elapsed (end - start) in minutes.
 */
export function differenceBetween(date1: Date, date2: Date): number {
	let oneMinuteInMs = 60000;
	let lastRunned = date2.getTime() - date1.getTime(); 
	return Math.round(lastRunned / oneMinuteInMs);
}

/**
 * normalizeMinutesAmount will return the given minutes into a string representation 
 * (ex: 127minutes = 2 hours 7 minutes).
 * 
 * This methods can translate minutes into months, days, hours & minutes if needed.
 * 
 * @param minutes the number of minutes to normalize
 * @return the string "readable" representation of the amount of minutes
 */
export function normalizeMinutesAmount(minutes: number): string {
	let result = '';
	let mins = Math.floor(minutes % 60);
	let onlyHours = Math.floor(minutes / 60);
	let hours = Math.floor(onlyHours % 24);
	let onlyDays = Math.floor(onlyHours / 24);
	let days = Math.floor(onlyDays % 30); 
	let months = Math.floor(onlyDays / 30);
	
	if (months > 0) {
		result += months + ' month' + ((months >  1) ? 's ' : ' ');
	}
	if (days > 0) {
		result += days + ' day' + ((days >  1) ? 's ' : ' ');
	}
	if (hours > 0) {
		result += hours + ' hour' + ((hours >  1) ? 's ' : ' ');
	}
	result += mins + ' minute' + ((mins > 1) ? 's ' : ' ');

	result += 'ago.';
	return result;
}