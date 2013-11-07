YUI.add("validation-controller",function(a){var b;b=function(){this.fieldsValidationConfigs=a.Validator.FieldsValidationConfigs,this.formsValidationConfigs=a.Validator.FormsValidationConfigs,this.validationFunctions=new a.Validator.ValidationFunctions,this.validationResultStatuses=a.Validator.ValidationResultStatuses,this.validationEffects=new a.Validator.ValidationEffects,this.fields=a.Validator.Fields,this.validationResultStatuses=a.Validator.ValidationResultStatuses},a.mix(b.prototype,{getValidationStatus:function(a){var b,c=!0,d=a.length;for(b=0;d>b&&(c=c&&a[b].field.status,c);b+=1);return c},validateField:function(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p=d.length,q=c.validationFunctions,r=c.validationResultStatuses,s=c.validationEffects;for(o=b.target?b.target:a.one(e.id),f=0;p>f;f+=1)if(validation=d[f],g=validation.rule,h=validation.param,i=validation.effect,k=o.get("value"),l=q[g](k,h),m=l.status,n=l.param||{},j=l.param&&l.param.message||validation.message,m===r.PASSED)e.status=!0,e.message="",o.setAttribute("aria-invalid","false"),s[i](e,o,n);else{if(m===r.FAILED){e.status=!1,e.message=j,o.setAttribute("aria-invalid","true"),s[i](e,o,n);break}if(m===r.FAILED_BUT_EFFECT_SKIPPED){o.setAttribute("aria-invalid","true"),e.status=!1,e.message="";break}if(m===r.PASSED_BUT_FURTHER_VALIDATION_SKIPPED){e.status=!0,e.message="",o.setAttribute("aria-invalid","false"),s[i](e,o,n);break}if(m===r.SKIPPED)break}},validateForm:function(b,c,d){b.halt();var e,f,g,h=d.length;for(e=0;h>e;e+=1)f=d[e],c.validateField({},c,f.fieldValidations,f.field);c.getValidationStatus(d)?this.submit():(g=a.one("[aria-invalid=true]"),g.focus())},fieldFocusHandler:function(b,c){if(""!==c.message){var d=a.one(c.messageTargetId);d&&(d.set("innerHTML",c.message),d.addClass("show"))}},simulateFormSubmit:function(a){a.halt(),this.simulate("submit")},init:function(){var b,c,d,e,f,g,h,i=this,j=this.fieldsValidationConfigs,k=this.formsValidationConfigs,l=this.fields;for(b=0,c=j.length;c>b;b+=1)d=j[b],d&&(e=d.field,f=d.event,g=d.validations,a.on(f,this.validateField,e.id,null,this,g,e));for(b=0,c=k.length;c>b;b+=1)d=k[b],d&&(form=d.form,f=d.event,j=d.fieldsValidationConfigs,formNode=a.one(form.id),a.on(f,this.validateForm,form.id,null,this,j,form),formNode.one("[type=submit]").on("mousedown",i.simulateFormSubmit));for(h in l)a.on("focus",this.fieldFocusHandler,l[h].id,null,l[h])}},!0),a.namespace("Validator"),a.Validator.ValidationController=b},{requires:["node","fields-validation-configs","forms-validation-configs","validation-functions","validation-result-statuses","validation-effects"]});