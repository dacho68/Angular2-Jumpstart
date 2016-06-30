
//
// ElementRef : reference to this hosted element 
// Renderer : for modifying this element
//
import  { Directive,ElementRef, Renderer } from '@angular/core'

// a directive
@Directive({
    // the [] it means the attribute
    selector: '[autoGrow]',
    host: {
        '(focus)' : 'onFocus()',
        '(blur)': 'onBlur()'
    }
    
})
export class AutoGrowDirective {
  
  // the  "private el" is equivalent to the private member variable " 
  //  el : ElementRef;
  //
    constructor(private el: ElementRef,private renderer: Renderer){
        
    }
    
    onFocus(){
        // with is the name of the style
        // 200 is the value
        this.renderer.setElementStyle(this.el.nativeElement,'width','200');
    }
    
    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement,'width','120');
    }
    
}