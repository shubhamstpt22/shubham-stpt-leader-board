import { TestBed } from '@angular/core/testing';

import { LeaderBoardService } from './leader-board.service';

describe('LeaderBoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeaderBoardService = TestBed.get(LeaderBoardService);
    expect(service).toBeTruthy();
  });
});
