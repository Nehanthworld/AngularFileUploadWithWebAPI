export interface  TemplateTag
{
    id : number;
    templateId:number;
    marketId: number;
    name:string;
    alternateNames:string;
    expression:string;
    jintExpression: string;
    isCustom: boolean;
    blocklyXml: string;
    dataType: number;
    order: number;
    isEditMode: boolean;
    format: string;
    isActive: boolean;

}