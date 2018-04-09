import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { Config } from './config';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ApiService, Config]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
  it('should get api url from Config', inject([ApiService, Config], (service: ApiService, config: Config) => {
    expect(service.apiUrl).toBe(config.apiUrl);
  }));
  it('should have a method to log users in', inject([ApiService], (service: ApiService) => {
    let method = typeof service.login;
    expect(method).toBe("function");
  }));
  it('should have a method to sign users in', inject([ApiService], (service: ApiService) => {
    let method = typeof service.signup;
    expect(method).toBe("function");
  }));
  it('should have a method to get sub-bodylocations based on body locations from backend', inject([ApiService], (service: ApiService) => {
    let method = typeof service.getSubLocations;
    expect(method).toBe("function");
  }));
  it('should have a method to get body locatin related symptoms from backend', inject([ApiService], (service: ApiService) => {
    let method = typeof service.getBodyLocationRelatedSymptoms;
    expect(method).toBe("function");
  }));
  it('should have a method to diagnose symptoms and return generated report from backend', inject([ApiService], (service: ApiService) => {
    let method = typeof service.diagnoseSymptoms;
    expect(method).toBe("function");
  }));
  it('should have a method to get all info related to an issue from backend', inject([ApiService], (service: ApiService) => {
    let method = typeof service.getIssueInfo;
    expect(method).toBe("function");
  }));
  it('should have a method to get a list of symptoms from backend', inject([ApiService], (service: ApiService) => {
    let method = typeof service.getSympttomsList;
    expect(method).toBe("function");
  }));
  it('should have a method to get patients all reports from backend', inject([ApiService], (service: ApiService) => {
    let method = typeof service.getReportList;
    expect(method).toBe("function");
  }));
  it('should have a method to get common sympoms and issues from backend', inject([ApiService], (service: ApiService) => {
    let method = typeof service.getCommonSymptomsAndIssue;
    expect(method).toBe("function");
  }));
});
