var library_router=null;define(["galaxy.masthead","utils/utils","libs/toastr","mvc/base-mvc","mvc/library/library-model","mvc/library/library-folderlist-view","mvc/library/library-librarylist-view","mvc/library/library-librarytoolbar-view"],function(e,c,g,j,h,a,f,d){var k=Backbone.Router.extend({routes:{"":"libraries","sort/:sort_by/:order":"sort_libraries","folders/:id":"folder_content","folders/:folder_id/download/:format":"download"}});var i=j.SessionStorageModel.extend({defaults:{with_deleted:false,sort_order:"asc",sort_by:"name"}});var b=Backbone.View.extend({toolbarView:null,libraryListView:null,library_router:null,folderContentView:null,initialize:function(){Galaxy.libraries=this;this.preferences=new i({id:"global-lib-prefs"});this.library_router=new k();this.library_router.on("route:libraries",function(){Galaxy.libraries.toolbarView=new d.ToolbarView();Galaxy.libraries.libraryListView=new f.LibraryListView()});this.library_router.on("route:folder_content",function(l){if(!Galaxy.libraries.folderContentView){Galaxy.libraries.folderContentView=new a.FolderContentView()}Galaxy.libraries.folderContentView.render({id:l})});this.library_router.on("route:download",function(l,m){if($("#center").find(":checked").length===0){Galaxy.libraries.library_router.navigate("folders/"+l,{trigger:true,replace:true})}else{Galaxy.libraries.folderContentView.download(l,m);Galaxy.libraries.library_router.navigate("folders/"+l,{trigger:false,replace:true})}});Backbone.history.start({pushState:false})}});return{GalaxyApp:b}});