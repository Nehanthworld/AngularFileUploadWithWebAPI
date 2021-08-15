import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CastExpr } from '@angular/compiler';
import { Component, ViewChild,Input,Output,EventEmitter, ɵɵNgOnChangesFeature } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {NgxBlocklyConfig,NgxBlocklyGeneratorConfig,NgxBlocklyComponent,NgxToolboxBuilderService,CustomBlock,Category,XmlBlock} from 'ngx-blockly';
import { TemplateTag } from '../models/template-tag.model';

@Component({
  selector: 'blockly-editor',
  templateUrl: './blockly.component.html'
})
export class BlocklyComponent {
  //Input parameters
//   @Input() code: string;
//   @Input() options: any;
//   @Input() templateTag: TemplateTag;
  
//   //Output events
//   @Output() codeChanges: EventEmitter<TemplateTag> = new EventEmitter<TemplateTag>();

//   //public variables / properties
//   blocklyJs: any;
//   editor: any;
//   cursorPosition: number;
//   line: number;
//   col: number;
//   codeBeforeCursor: string;
//   codeAfterCursor: string;
//   indentCurrentLine: string;
//   dropDownList: any;
//   defaultXML = '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>';
//   sampleAPIJson:any;
//   tagsList: any;

//   public config: NgxBlocklyConfig = {
//     scrollbars: true,
//     trashcan: true
//   };

//   public generatorConfig = NgxBlocklyGeneratorConfig = {
//     dart: false,
//     javascript: true,
//     lua: false,
//     php: false,
//     python: false,
//     xml: true,
//   };

//   public customBlocks: CustomBlock[] = [
//     new CustomVariableDeclarationBlock(),

//   ];

//   //private variables / properties
//   private customBlocksCategory: Category;

//   private logicCategory: Category = new Category([
//       new XmlBlock('controls_if'),
//       new XmlBlock('controls_ifelse'),
//       new XmlBlock('logic_compare'),
//       new XmlBlock('logic_operation'),
//       new XmlBlock('logic_negate'),
//       new XmlBlock('logic_boolean'),
//       new XmlBlock('logic_null'),
//       new XmlBlock('logic_ternary'),
//     ],
//     '%{BKY_LOGIC_HUE}',
//     'Logic',
//     null);
//     private loopCategory: Category = new Category([
//       new XmlBlock('controls_repeat_ext'),
//       new XmlBlock('controls_whileUntil'),
//       new XmlBlock('controls_for'),
//       new XmlBlock('controls_forEach'),
//       new XmlBlock('controls_flow_statements'),
//     ],
//     '%{BKY_LOOPS_HUE}',
//     'Loops',null);

//     private mathCategory: Category = new Category([
//       new XmlBlock('math_number'),
//       new XmlBlock('math_arithmetic'),
//       new XmlBlock('math_single'),
//       new XmlBlock('math_trig'),
//       new XmlBlock('math_constant'),
//       new XmlBlock('math_number_property'),
//       new XmlBlock('math_round'),
//       new XmlBlock('math_on_list'),
//       new XmlBlock('math_modulo'),
//       new XmlBlock('math_constrain'),
//       new XmlBlock('math_random_int'),
//       new XmlBlock('math_random_float'),
//       new XmlBlock('math_atan2'),
// ],'%{BKY_MATH_HUE}',
// 'Math'
//     );

//     private textCategory: Category = new Category([
//       new XmlBlock('text'),
//       new XmlBlock('text_join'),
//       new XmlBlock('text_append'),
//       new XmlBlock('text_length'),
//       new XmlBlock('text_count'),
//       new XmlBlock('text_isEmpty'),
//       new XmlBlock('text_indexOf'),
//       new XmlBlock('text_charAt'),
//       new XmlBlock('text_getSubstring'),
//       new XmlBlock('text_changeCase'),
//       new XmlBlock('text_trim'),
//       new XmlBlock('text_print'),
//       new XmlBlock('text_prompt_ext'),
//       new XmlBlock('text_replace'),
//       new XmlBlock('text_reverse'),
//     ],'%{BKY_TEXTS_HUE}',
// 'Text'
//     );

//     private listCategory: Category = new Category([
//       new XmlBlock('lists_create_with'),
//       new XmlBlock('lists_create_empty'),
//       new XmlBlock('lists_repeat'),
//       new XmlBlock('lists_length'),
//       new XmlBlock('lists_isEmpty'),
//       new XmlBlock('lists_indexOf'),
//       new XmlBlock('lists_getIndex'),
//       new XmlBlock('lists_setIndex'),
//       new XmlBlock('lists_getSublist'),
//       new XmlBlock('lists_split'),
//       new XmlBlock('lists_sort'),
//       new XmlBlock('lists_reverse'),
//     ],'%{BKY_LISTS_HUE}',
// 'Lists'
//     );

//     private functionCategory: Category = new Category([],
//     '%{BKY_PROCEDURES_HUE}',
//     'Functions',
//     'PROCEDURES'
//     );
//     private variablesCategory: Category = new Category([],
//       '%{BKY_VARIABLE_HUE}',
//       'Custom tags',
//       'VARIABLE'
//       );

//     //View children
//     @ViewChild(NgxBlocklyComponent,{static:false})
//     ngxBlockly: NgxBlocklyComponent;

//     constructor(
//       ngxToolboxBuilder: NgxToolboxBuilderService
//     ){
//       this.customBlocks.push(
//         new CustomDropdownBlock(
//           'comment',
//           null,
//           null,
//           this.sampleAPIJson
//         )
//       );
//       if(this.tagsList.length > 0)
//       {
//         this.customBlocks.push(new CustomDropdownTagBlock(
//           'dropdowntag',
//           null,
//           null,
//           this.tagsList
//         ));
//       }
//       this.customBlocksCategory = new Category(
//         this.customBlocks,
//         '50',
//         'Other',
//         null
//       );
//     }
//     ngxToolboxBuilder.nodes = [
//       this.logicCategory,
//       this.loopCategory,
//       this.mathCategory,
//       this.textCategory,
//       this.listCategory,
//       this.variablesCategory,
//       this.functionCategory,
//       this.customBlocksCategory
//     ];

//     this.config.toolbox = ngxToolboxBuilder.build();

//     ngAfterViewInit(){
//       if(this.ngxBlockly && this.templateTag && this.templateTag.blocklyXml.length > 0){
//         this.ngxBlockly.fromXml(this.templateTag.blocklyXml);
//       }
//       else if(this.ngxBlockly){
//         this.ngxBlockly.fromXml(this.defaultXML);
//       }
//     }

//     ɵɵNgOnChangesFeature(){
//       if(this.ngxBlockly && this.templateTag && this.templateTag.blocklyXml.length > 0){
//         this.ngxBlockly.fromXml(this.templateTag.blocklyXml);
//       }
//       else if(this.ngxBlockly){
//         this.ngxBlockly.fromXml(this.defaultXML);
//       }
//     }
//     ngOnDestroy(){
//       this.ngxBlockly.fromXml(this.defaultXML);
//     }

//     onCode(code: string)
//     {
//       this.addBlocklyCode(code);
//     }

//     getJintExpression(code: string){
//       let modifiedExpression;
//       modifiedExpression = code + this.extractTag(code) + ';';
//       return modifiedExpression;
//     }

//     extractTag(expressionStr: any){
//       let keyValue = '';
//       const regExp = new RegExp(/[A-Za-z0-9]+(_[A-Za-z0-9]+)+/g);
//       const token = 'var';

//       if(expressionStr.startsWith(token)){
//         const splitStr = expressionStr.substring(expressionStr.indexOf(' ')+1,
//         expressionStr.indexOf(';')).split(',');
//         for (const item of splitStr){
//           if(regExp.test(item)){
//             keyValue = item;
//           }
//         }
//       }
//       return keyValue;
//     }

//     private addBlocklyCode(blocklyCode: string) {
//       this.templateTag.expression = blocklyCode;
//       this.templateTag.blocklyXml = this.ngxBlockly.toXml();
//       this.templateTag.jintExpression = this.getJintExpression(blocklyCode);
//       this.codeChange.emit(this.templateTag);
//     }
  // }
}
