import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepoCardComponent } from './github-repo-card.component';

describe('GithubRepoCardComponent', () => {
  let component: GithubRepoCardComponent;
  let fixture: ComponentFixture<GithubRepoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubRepoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubRepoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
