/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlogCategoriesService } from './blog-categories.service';

describe('BlogCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogCategoriesService]
    });
  });

  it('should ...', inject([BlogCategoriesService], (service: BlogCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
