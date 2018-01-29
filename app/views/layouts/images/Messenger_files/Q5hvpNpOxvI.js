if (self.CavalryLogger) { CavalryLogger.start_js(["U0fRj"]); }

__d("MessengerContextualActions.react",["cx","ContextualLayerUpdateOnScroll","LayerHideOnBlur","Link.react","React","ReactAbstractContextualDialog","ReactLayer"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k,l,m=c("React").PropTypes,n=c("ReactLayer").createClass(c("ReactAbstractContextualDialog").createSpec({displayName:"MessengerContextualActionsDialog",theme:{wrapperClassName:"_hw2",arrowDimensions:{offset:12,length:12}}}));i=babelHelpers.inherits(o,c("React").Component);j=i&&i.prototype;o.prototype.render=function(){var q=this.props,r=q.children,s=babelHelpers.objectWithoutProperties(q,["children"]);return c("React").createElement(n,babelHelpers["extends"]({alignment:"center",behaviors:{ContextualLayerUpdateOnScroll:c("ContextualLayerUpdateOnScroll"),LayerHideOnBlur:c("LayerHideOnBlur")}},s,{onToggle:this.props.onToggle}),c("React").createElement("ul",{className:"_hw3"},r))};function o(){i.apply(this,arguments)}o.propTypes={onToggle:m.func};o.Item=p;k=babelHelpers.inherits(p,c("React").Component);l=k&&k.prototype;p.prototype.render=function(){return c("React").createElement("li",{className:"_hw4"},c("React").createElement(c("Link.react"),{className:"_hw5",onClick:this.props.onClick},this.props.children))};function p(){k.apply(this,arguments)}p.propTypes={onClick:m.func};f.exports=o}),null);
__d("MessengerDeleteMessageDialogReact.bs",["fbt","bs_curry","ReasonReact.bs","MessengerDialogReact.bs","MessengerDialogBodyReact.bs"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=c("ReasonReact.bs").statelessComponent("MessengerDeleteMessageDialogReact");function j(){return h._("Chatbericht verwijderen")}var k=h._("Weet je zeker dat je dit bericht wilt verwijderen?");function l(){return h._("Verwijderen")}function m(o,p,q,r){var s=function s(){c("bs_curry")._1(o,false);return c("bs_curry")._1(p,0)},t=i.slice();t[9]=function(){return c("ReasonReact.bs").element(0,0,c("MessengerDialogReact.bs").Dialog[0](0,o,0,0,0,0,0,[c("ReasonReact.bs").element(0,0,c("MessengerDialogReact.bs").Header[0](0,0,j(0))),c("ReasonReact.bs").element(0,0,c("MessengerDialogBodyReact.bs").make(0,[k])),c("ReasonReact.bs").element(0,0,c("MessengerDialogReact.bs").Footer[0](0,0,[c("ReasonReact.bs").element(0,0,c("MessengerDialogReact.bs").CancelButton[0]([q],[])),c("ReasonReact.bs").element(0,0,c("MessengerDialogReact.bs").Button[0](0,[l(0)],0,["danger"],[s],[0],0,0,[]))]))]))};return t}var n=c("ReasonReact.bs").wrapReasonForJs(i,function(o){return m(o.onToggle,o.onDelete,o.onCancel,[])});g.component=i;g.renderDialogHeaderMsg=j;g.dialogBodyMsg=k;g.renderDialogButtonMsg=l;g.make=m;g.jsComponent=n}),null);
__d("MessengerSaveMessageDialogReact.bs",["fbt","URI","bs_curry","LinkReact.bs","CurrentUser","ReasonReact.bs","MessengerDialogReact.bs","MessengerDialogBodyReact.bs","CollectionCurationReferrerTags","XSavedForLaterDashboardController","CollectionCurationReferrerParamNames"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=c("ReasonReact.bs").statelessComponent("MessengerSaveMessageDialogReact"),j=c("XSavedForLaterDashboardController").getURIBuilder().getURI(),k=c("CurrentUser").isWorkUser()?h._("Opslaan in Workplace"):h._("Opslaan op Facebook...");function l(o){var p=new(c("URI"))(location.href).getSubdomain();return j.setDomain("subdomain.facebook.com").setSubdomain(p).setProtocol("https").setQueryData(o)}function m(o,p){__p&&__p();var q=i.slice();q[9]=function(){var r={};r[c("CollectionCurationReferrerParamNames").CLICK_REF]=c("CollectionCurationReferrerTags").MESSENGER_DOT_COM_SAVE_CONFIRMATION;var s=l(r);return c("ReasonReact.bs").element(0,0,c("MessengerDialogReact.bs").Dialog[0](0,o,0,0,0,0,0,[c("ReasonReact.bs").element(0,0,c("MessengerDialogReact.bs").Header[0](0,0,k)),c("ReasonReact.bs").element(0,0,c("MessengerDialogBodyReact.bs").make(0,[c("ReasonReact.bs").element(0,0,c("LinkReact.bs").make(0,0,0,0,0,0,[s],0,0,0,0,0,0,0,["_blank"],0,h._("Je opgeslagen items bekijken")))]))]))};q[13]=function(){return[[function(){return setTimeout(function(){return c("bs_curry")._1(o,false)},2e3)},function(r){clearTimeout(r);return 0}],0]};return q}var n=c("ReasonReact.bs").wrapReasonForJs(i,function(o){return m(o.onToggle,[])});g.component=i;g.savedForLaterURI=j;g.getSaveMessage=k;g.getDashUri=l;g.make=m;g.jsComponent=n}),null);
__d("XMessengerDotComSaveController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/save/message/",{})}),null);
__d("MessengerMessageActions.react",["cx","fbt","CurrentUser","FBClipboardLink.react","ImmutableObject","ReactLayeredComponentMixin_DEPRECATED","MercuryAttachmentType","MercuryMessageActions","MercuryMessageInfo","gkx","MessengerDialogs.bs","MessengerContextualActions.react","MessengerDeleteMessageDialogReact.bs","MessengerReactionsMenu.react","React","AsyncRequest","CollectionsDisplaySurface","CollectionCurationMechanisms","MessengerConfig","MessengerDotComSaveModule","MessengerSaveMessageDialogReact.bs","MessengerURIUtils.bs","SaveMessageUtils","SavedStateActions","URLMatcher","XMessengerDotComSaveController","idx"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=c("MessengerDeleteMessageDialogReact.bs").jsComponent,k=c("MessengerSaveMessageDialogReact.bs").jsComponent,l=c("MessengerContextualActions.react").Item,m=c("React").PropTypes,n=c("React").createClass({displayName:"MessengerMessageActions",mixins:[c("ReactLayeredComponentMixin_DEPRECATED")],propTypes:{hasFormatting:m.func,isActive:m.bool,isDeletable:m.bool,isFromViewer:m.bool,isShowingOriginal:m.bool,includeReactions:m.bool,message:m.instanceOf(c("ImmutableObject")).isRequired,onToggleOriginal:m.func,onShowMenu:m.func.isRequired},getDefaultProps:function o(){return{isDeletable:true}},getInitialState:function o(){return{shown:false}},render:function o(){return this.props.isActive?c("React").createElement("span",{className:"_2rvp",ref:"actions",onClick:this._toggleShown},this.renderMenu()):null},renderMenu:function o(){if(!this.state.open)return null;return c("React").createElement(c("MessengerReactionsMenu.react"),{entryPoint:"dot_menu",message:this.props.message,onHide:this._hidePopover,refProp:function(){return this.refs.actions}.bind(this),useChatEmojiReact:c("gkx")("AT6A1OO2lJlnHHdkzHOPkllgq2YBSZ42wJAnMnfeaJEnCNUkgcLE__VIZKrcnnkybvVMYEfu3rwvCBYOLMeSgn0B")})},_openPopover:function o(){this.setState({open:true,shown:false})},_hidePopover:function o(){this.setState({open:false})},renderLayers:function o(){__p&&__p();if(!this.state.shown)return{};var p=[];p.push(c("React").createElement(l,{key:"delete",onClick:this._handleDelete},this._renderActionItemMsg()));var q=this._getLinkToAttachment();if(q&&c("MessengerConfig").CopyAttachmentLink)p.push(c("React").createElement(l,{key:"copy-link",onClick:this._handleLink},this._renderCopyAttachmentLinkMsg(q)));if(this.props.hasFormatting&&this.props.hasFormatting()&&this.props.onToggleOriginal)p.push(c("React").createElement(l,{key:"view-source",onClick:this._handleToggleOriginal},this._renderShowOriginalMsg()));if(this._canSaveMessage())p.push(c("React").createElement(l,{key:"save",onClick:this._handleSave},this._renderSaveItemMsg()));if(c("MessengerConfig").ShowMessageLinks)p.push(c("React").createElement(l,{key:"react",onClick:this._handleLink},this._renderLinkItemMsg()));if(this.props.includeReactions)p.push(c("React").createElement(l,{key:"perma-link",onClick:this._openPopover},this._renderReactionMsg()));return{contextualDialog:c("React").createElement(c("MessengerContextualActions.react"),{context:this.refs.actions,onToggle:this._handleActionsToggle,shown:this.props.isActive},this._renderRetry(),p)}},_toggleShown:function o(){this.setState({shown:!this.state.shown},function(){return this.props.onShowMenu(this.state.shown)}.bind(this))},_renderActionItemMsg:function o(){return i._("Verwijderen")},_renderSaveItemMsg:function o(){return c("CurrentUser").isWorkUser()?i._("Opslaan in Workplace"):i._("Opslaan op Facebook")},_renderReactionMsg:function o(){return i._("Reageren")},_renderShowOriginalMsg:function o(){if(this.props.isShowingOriginal)return i._("Opgemaakte versie weergeven");else return i._("Origineel weergeven")},_renderCopyAttachmentLinkMsg:function o(p){var q=i._("Link kopi\u00ebren om te delen");return c("React").createElement(c("FBClipboardLink.react"),{suppress:true,tooltip:q,value:p},q)},_renderLinkItemMsg:function o(){var p=c("MessengerURIUtils.bs").getURIForMessageID(this.props.message.message_id).getQualifiedURIBase().toString(),q=i._("Link kopi\u00ebren");return c("React").createElement(c("FBClipboardLink.react"),{suppress:true,tooltip:"",value:p},q)},_renderRetry:function o(){if(!c("MercuryMessageInfo").hasError(this.props.message))return null;return c("React").createElement(l,{onClick:this._handleRetry},i._("Opnieuw proberen"))},_handleActionsToggle:function o(p){!p&&this._handleDeselect()},_handleDeselect:function o(){this.setState({shown:false},function(){return this.props.onShowMenu(this.state.shown)}.bind(this))},_handleDelete:function o(){var p=this.props.message;c("MessengerDialogs.bs").showDialog(function(){return c("React").createElement(j,{onDelete:function q(){c("MercuryMessageActions").get()["delete"](p.thread_id,[p.message_id])},onToggle:this._handleDialogToggle,onCancel:this._handleDeselect,isFromViewer:this.props.isFromViewer})}.bind(this))},_getLinkToAttachment:function o(){var p,q=this.props.message;return(p=q)!=null?(p=p.attachments)!=null?(p=p[0])!=null?(p=p.share)!=null?p.uri:p:p:p:p},_canSaveMessage:function o(){__p&&__p();var p=this.props.message;if(c("MessengerDotComSaveModule").enabled_messenger_save&&this._isSavableMessageAttachment())return true;if(c("MessengerDotComSaveModule").enabled_messenger_save&&p.attachments&&p.attachments.length>0&&p.attachments[0].share&&p.attachments[0].share.media&&p.attachments[0].share.media.playable)return true;if(c("MessengerDotComSaveModule").enabled_messenger_save){var q=c("URLMatcher").match(p.body);if(q!=null&&q.length>0)return true}return false},_handleLink:function o(){this._handleActionsToggle(false)},_isSavableMessageAttachment:function o(){__p&&__p();var p=this.props.message.attachments;if(!p||p.length===0)return false;for(var q=0;q<p.length;q++){var r=p[q],s=false;if(r.share&&r.share.style_list){var t=r.share.style_list;s=c("SaveMessageUtils").isSavableMessageAttachment(t)}else s=r.attach_type===c("MercuryAttachmentType").VIDEO;if(!s)return false}return true},_handleSave:function o(){var p=this.props.message,q=c("CollectionsDisplaySurface").MESSENGER_DOT_COM_MESSAGE,r=c("CollectionCurationMechanisms").RIGHT_CLICK;new(c("AsyncRequest"))().setURI(c("XMessengerDotComSaveController").getURIBuilder().getURI()).setData({action:c("SavedStateActions").SAVE,surface:q,mechanism:r,message_id:p.message_id}).send();c("MessengerDialogs.bs").showDialog(function(){return c("React").createElement(k,{onToggle:this._handleDialogToggle})}.bind(this));this._handleActionsToggle(false)},_handleDialogToggle:function o(p){if(!p)c("MessengerDialogs.bs").removeDialog()},_handleRetry:function o(){this._handleDeselect();c("MercuryMessageActions").get().resend(this.props.message)},_handleToggleOriginal:function o(){this.props.onToggleOriginal&&this.props.onToggleOriginal();this._handleActionsToggle(false)}});f.exports=n}),null);