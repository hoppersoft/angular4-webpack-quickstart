import { Component, OnInit } from '@angular/core';
import { Logger } from 'angular2-logger/core';

@Component({
    selector: 'hello-world',
    templateUrl: './helloworld.component.template.html',
    styleUrls: [ './helloworld.component.css' ]  
})
export class HelloWorldComponent implements OnInit {

    constructor(private logger: Logger) {
        this.logger.debug('%s::ctor', HelloWorldComponent.name);
    }

    
    ngOnInit(): void {
        this.logger.debug('%s::ngOnInit', HelloWorldComponent.name);
    }
}