define([],function(){var b=Backbone.Model.extend({defaults:{percentage:0,icon:"fa-circle",label:"",status:""}});var a=Backbone.View.extend({model:null,initialize:function(d){var c=this;this.model=d;this.options=this.model.attributes;this.setElement(this._template(this.options));$(this.el).on("click",this.options.onclick);if(this.options.tooltip){$(this.el).tooltip({title:this.options.tooltip,placement:"bottom"})}this.model.on("change:percentage",function(){c._percentage(c.model.get("percentage"))});this.model.on("change:status",function(){c._status(c.model.get("status"))});var c=this;$(window).on("beforeunload",function(){var e="";if(c.options.onunload){e=c.options.onunload()}if(e!=""){return e}})},_status:function(d){var c=this.$el.find(".progress-bar");c.removeClass();c.addClass("progress-bar");c.addClass("progress-bar-notransition");if(d!=""){c.addClass("progress-bar-"+d)}},_percentage:function(d){var c=this.$el.find(".progress-bar");c.css({width:d+"%"})},_template:function(c){return'<div style="float: right"><div class="upload-button"><div class="progress"><div class="progress-bar"></div></div><div id="label" class="label"><a class="panel-header-button" href="javascript:void(0)"><span class="fa fa-upload"></span></a></div></div></div>'}});return{Model:b,View:a}});