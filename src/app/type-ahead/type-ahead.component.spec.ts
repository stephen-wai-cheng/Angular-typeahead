import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TypeAheadComponent } from './type-ahead.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

describe('type-ahead component tests', () => {
    let component: TypeAheadComponent;
    let fixture: ComponentFixture<TypeAheadComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                TypeAheadComponent
            ],
            imports: [
                FormsModule,
                RouterModule
            ]
        });
        fixture = TestBed.createComponent(TypeAheadComponent);
        component = fixture.componentInstance;
    });

    fit('first test', () => {
        component.data = ['donkey', 'monkey', 'wolf', 'zebra'];
        component.input.nativeElement.value = 'onk';

        const inputDe = fixture.debugElement.query(By.css('input[type="text"]'));
        inputDe.triggerEventHandler('keyup', null);
    });
});
