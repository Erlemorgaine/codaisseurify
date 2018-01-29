if (self.CavalryLogger) { CavalryLogger.start_js(["i5ss3"]); }

__d("MessengerForwardChatFlowSharedAttachmentsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(){this.clear()}h.prototype.log=function(){c("GeneratedLoggerUtils").log("logger:MessengerForwardChatFlowSharedAttachmentsLoggerConfig",this.$MessengerForwardChatFlowSharedAttachmentsTypedLogger1,c("Banzai").BASIC)};h.prototype.logVital=function(){c("GeneratedLoggerUtils").log("logger:MessengerForwardChatFlowSharedAttachmentsLoggerConfig",this.$MessengerForwardChatFlowSharedAttachmentsTypedLogger1,c("Banzai").VITAL)};h.prototype.clear=function(){this.$MessengerForwardChatFlowSharedAttachmentsTypedLogger1={};return this};h.prototype.updateData=function(j){this.$MessengerForwardChatFlowSharedAttachmentsTypedLogger1=babelHelpers["extends"]({},this.$MessengerForwardChatFlowSharedAttachmentsTypedLogger1,j);return this};h.prototype.setAttachmentID=function(j){this.$MessengerForwardChatFlowSharedAttachmentsTypedLogger1.attachment_id=j;return this};h.prototype.setAttachmentType=function(j){this.$MessengerForwardChatFlowSharedAttachmentsTypedLogger1.attachment_type=j;return this};h.prototype.setIsFromViewer=function(j){this.$MessengerForwardChatFlowSharedAttachmentsTypedLogger1.is_from_viewer=j;return this};h.prototype.setVC=function(j){this.$MessengerForwardChatFlowSharedAttachmentsTypedLogger1.vc=j;return this};h.prototype.updateExtraData=function(j){j=c("nullthrows")(c("GeneratedLoggerUtils").serializeMap(j));c("GeneratedLoggerUtils").checkExtraDataFieldNames(j,i);this.$MessengerForwardChatFlowSharedAttachmentsTypedLogger1=babelHelpers["extends"]({},this.$MessengerForwardChatFlowSharedAttachmentsTypedLogger1,j);return this};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l)};var i={attachment_id:true,attachment_type:true,is_from_viewer:true,vc:true};f.exports=h}),null);
__d("ChatPhotoForwardButton.react",["cx","fbt","Link.react","MessagingForwardAttachmentDialog.react","React","TooltipData","MessengerPhotoForwardConfig","MessengerForwardChatFlowSharedAttachmentsTypedLogger"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=c("React").PropTypes;j=babelHelpers.inherits(m,c("React").PureComponent);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.state={dialogShown:false},this.$ChatPhotoForwardButton2=function(){if(this.props.attachmentIDs[0]&&this.props.attachmentTypes[0])new(c("MessengerForwardChatFlowSharedAttachmentsTypedLogger"))().setAttachmentID(this.props.attachmentIDs[0]).setIsFromViewer(this.props.isFromViewer).setAttachmentType(this.props.attachmentTypes[0]).log();this.setState({dialogShown:true})}.bind(this),this.$ChatPhotoForwardButton3=function(){this.setState({dialogShown:false})}.bind(this),o}m.prototype.render=function(){var n=i._("Doorsturen"),o=this.props.isFromViewer?"left":"right",p=Object.assign({"data-tooltip-alignh":o},c("TooltipData").propsFor(n,o)),q=c("MessengerPhotoForwardConfig").showArrowIcon?"_3xqa":"_2t5t";return c("React").createElement("div",null,this.$ChatPhotoForwardButton1(),c("React").createElement(c("Link.react"),babelHelpers["extends"]({},this.props,p,{"aria-label":n,onClick:this.$ChatPhotoForwardButton2,ref:"forwardButton",role:"button",className:"_2t5q"+(!this.props.isFromViewer?" _1_47":"")+(this.props.isFromViewer?" _1_48":"")}),c("React").createElement("div",{className:q})))};m.prototype.$ChatPhotoForwardButton1=function(){if(!this.state.dialogShown)return null;var n=i._("Doorsturen in afzonderlijke berichten");return c("React").createElement(c("MessagingForwardAttachmentDialog.react"),{attachmentID:this.props.attachmentIDs[0],onClose:this.$ChatPhotoForwardButton3,shown:this.state.dialogShown,title:n})};m.propTypes={attachmentIDs:l.arrayOf(l.string).isRequired,isFromViewer:l.bool.isRequired};f.exports=m}),null);
__d("MessengerPhotoForwardButton.react",["cx","fbt","Link.react","MessengerDialogs.bs","MessengerForwardAttachmentDialogReact.bs","React","TooltipData","MessengerForwardChatFlowSharedAttachmentsTypedLogger"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=c("MessengerForwardAttachmentDialogReact.bs").jsComponent,m=c("React").PropTypes;j=babelHelpers.inherits(n,c("React").PureComponent);k=j&&j.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.$MessengerPhotoForwardButton1=function(){var t=i._("Doorsturen in afzonderlijke berichten");if(this.props.attachmentIDs[0]&&this.props.attachmentTypes[0])new(c("MessengerForwardChatFlowSharedAttachmentsTypedLogger"))().setAttachmentID(this.props.attachmentIDs[0]).setIsFromViewer(this.props.isFromViewer).setAttachmentType(this.props.attachmentTypes[0]).log();c("MessengerDialogs.bs").showDialog(function(){return c("React").createElement(l,{attachmentID:this.props.attachmentIDs[0],onClose:this.$MessengerPhotoForwardButton2,shown:true,title:t})}.bind(this))}.bind(this),p}n.prototype.render=function(){var o=i._("Verdergaan"),p=this.props.isFromViewer?"left":"right",q=Object.assign({"data-tooltip-alignh":p},c("TooltipData").propsFor(o,p));return c("React").createElement(c("Link.react"),babelHelpers["extends"]({},this.props,q,{"aria-label":o,onClick:this.$MessengerPhotoForwardButton1,ref:"forwardButton",role:"button",className:"_2t5t"}))};n.prototype.$MessengerPhotoForwardButton2=function(){c("MessengerDialogs.bs").removeDialog()};n.propTypes={attachmentIDs:m.arrayOf(m.string).isRequired,isFromViewer:m.bool.isRequired};f.exports=n}),null);