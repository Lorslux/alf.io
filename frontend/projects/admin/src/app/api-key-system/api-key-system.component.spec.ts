import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiKeySystemComponent } from './api-key-system.component';

describe('ApiKeySystemComponent', () => {
  let component: ApiKeySystemComponent;
  let fixture: ComponentFixture<ApiKeySystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiKeySystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiKeySystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
