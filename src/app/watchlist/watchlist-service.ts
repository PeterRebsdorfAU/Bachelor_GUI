import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  getBundle() {
    return {
      steps: ['IBD', 'TRE', 'TCE', 'WPE', 'FIN'],
      current: 'TRE' };
  }

  getSystems() {
    return [ {
      name: 'Task system',
      steps: ['RP', 'TRE', 'TCE', 'WPE', 'R'],
      current: 'R', arc: 'ARC 1.3.6.1234'
    }, {
      name: 'Broker system',
      steps: ['RP', 'TRE', 'TCE', 'WPE', 'R'],
      current: 'WPE', arc: 'ARC 24.5.2.633'
    }, {
      name: 'Patient system',
      steps: ['RP', 'TRE', 'TCE', 'WPE', 'R'],
      current: 'TRE', arc: 'ARC 2.35.32.11'
    } ];
  }

  getPlannedBundle() {
    return {
      steps: ['Bundle planned', 'Bundle ready to fill', 'Bundle finished'],
      current: 'Bundle planned'
    };
  }

  getDelivery() {
    return {
      steps: ['Delivery planned', 'Delivery delivered', 'Delivery confirmed', 'Delivery finished'],
      current: 'Delivery planned' };
  }
}
