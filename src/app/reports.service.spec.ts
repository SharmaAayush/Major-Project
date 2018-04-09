import { TestBed, inject } from '@angular/core/testing';

import { ReportsService } from './reports.service';
import { HttpModule } from '@angular/http';
import { Config } from './config';
import { ApiService } from './api.service';

describe('ReportsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ReportsService, Config, ApiService]
    });
  });

  it('should be created', inject([ReportsService], (service: ReportsService) => {
    expect(service).toBeTruthy();
  }));
  it('should contain a method to set reportsList', inject([ReportsService], (service: ReportsService) => {
    let method = typeof service.setReportList;
    expect(method).toBe("function");
  }));
  it('should properly set a reportsList using setReportList', inject([ReportsService], (service: ReportsService) => {
    let arr = [0, 1, 2, 3];
    service.setReportList(arr);
    expect(service.reportList).toBe(arr);
  }));
  it('should contain a method to get list of all the reports', inject([ReportsService], (service: ReportsService) => {
    let method = typeof service.getReportList;
    expect(method).toBe("function");
  }));
  it('should properly get the reportsList using getReportList', inject([ReportsService], (service: ReportsService) => {
    let arr = [0, 1, 2, 3];
    service.setReportList(arr);
    expect(service.getReportList()).toBe(arr);
  }));
  it('should contain a method to get individual reports', inject([ReportsService], (service: ReportsService) => {
    let method = typeof service.getReport;
    expect(method).toBe("function");
  }));
  it('should properly get individual reports using getReport', inject([ReportsService], (service: ReportsService) => {
    let arr = [
      {
        id: 0,
        value: 0
      },
      {
        id: 1,
        value: 1
      },
      {
        id: 2,
        value: 2
      },
      {
        id: 3,
        value: 3
      }
    ];
    service.setReportList(arr);
    expect(service.getReport(2).value).toBe(2);
  }))
});
