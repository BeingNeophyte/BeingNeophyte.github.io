//KeyBoard Shortcuts plugin/Extension for Coppercube 3D Developed by ****Vazahat Pathan**** AKA ****just_in_case****//
//downloaded from **** https://neophyte.cf ****

//Toggle Visibility//
function Toggle_Visibility()
{
	var scenenode = editorGetSelectedSceneNode();
	var visibility = ccbGetSceneNodeProperty(scenenode, "Visible");

	if (visibility == true)
		ccbSetSceneNodeProperty(scenenode,"Visible", false);
	else ccbSetSceneNodeProperty(scenenode,"Visible", true);
	
	ccbUpdateSceneNodeBoundingBox(scenenode);
	editorUpdateAllWindows();
}

//Toggle Collision//
function Toggle_Collision()
{
	var scenenode = editorGetSelectedSceneNode();
	var Collision = ccbGetSceneNodeProperty(scenenode, "Collision");

	if (Collision == true)
		ccbSetSceneNodeProperty(scenenode,"Collision", false);
	else ccbSetSceneNodeProperty(scenenode,"Collision", true);
	
	ccbUpdateSceneNodeBoundingBox(scenenode);
	editorUpdateAllWindows();
}

//Toggle Occludes Light//
function Toggle_Occludes_Light()
{
	var scenenode = editorGetSelectedSceneNode();
	var Occludes_Light = ccbGetSceneNodeProperty(scenenode, "OccludesLight");

	if (Occludes_Light == true)
		ccbSetSceneNodeProperty(scenenode,"OccludesLight", false);
	else ccbSetSceneNodeProperty(scenenode,"OccludesLight", true);
	
	ccbUpdateSceneNodeBoundingBox(scenenode);
	editorUpdateAllWindows();
}

//Switch Material to Transparent Alpha//
function Switch_transparent_alpha_material()
{
	var scenenode = editorGetSelectedSceneNode();
	var material_count = ccbGetSceneNodeMaterialCount(scenenode);
	
	for (i = 0; i < material_count; i++) { 
    ccbSetSceneNodeMaterialProperty(scenenode,i, "Type", "trans_alphach");
}
	
	ccbUpdateSceneNodeBoundingBox(scenenode);
	editorUpdateAllWindows();
}

//Switch Material to Transparent Add//
function Switch_transparent_add_material()
{
	var scenenode = editorGetSelectedSceneNode();
	var material_count = ccbGetSceneNodeMaterialCount(scenenode);
	
	for (i = 0; i < material_count; i++) { 
    ccbSetSceneNodeMaterialProperty(scenenode,i, "Type", "trans_add");
}
	
	ccbUpdateSceneNodeBoundingBox(scenenode);
	editorUpdateAllWindows();
}

//Switch Material to Solid//
function Switch_Solid_material()
{
	var scenenode = editorGetSelectedSceneNode();
	var material_count = ccbGetSceneNodeMaterialCount(scenenode);
	
	for (i = 0; i < material_count; i++) { 
    ccbSetSceneNodeMaterialProperty(scenenode,i, "Type", "solid");
}
	
	ccbUpdateSceneNodeBoundingBox(scenenode);
	editorUpdateAllWindows();
}

//Toggle to Dynamic Lighting//
function toggle_Dynamic_Lighting()
{
	var scenenode = editorGetSelectedSceneNode();
	var material_count = ccbGetSceneNodeMaterialCount(scenenode);
	var lighting = ccbGetSceneNodeMaterialProperty(scenenode, 0, "Lighting");
	
	for (i = 0; i < material_count; i++) { 
	if (lighting == false)
		ccbSetSceneNodeMaterialProperty(scenenode,i, "Lighting", true);
	else ccbSetSceneNodeMaterialProperty(scenenode,i, "Lighting", false);
}
	
	ccbUpdateSceneNodeBoundingBox(scenenode);
	editorUpdateAllWindows();
}

//Toggle Wireframe//
function Toggle_Wireframe()
{
	var scenenode = editorGetSelectedSceneNode();
	var material_count = ccbGetSceneNodeMaterialCount(scenenode);
	var Wireframe = ccbGetSceneNodeMaterialProperty(scenenode, 0, "Wireframe");
	
	for (i = 0; i < material_count; i++) { 
	if (Wireframe == false)
		ccbSetSceneNodeMaterialProperty(scenenode,i, "Wireframe", true);
	else ccbSetSceneNodeMaterialProperty(scenenode,i, "Wireframe", false);
}
	
	ccbUpdateSceneNodeBoundingBox(scenenode);
	editorUpdateAllWindows();
}

//Toggle Double Sided material//
function Toggle_Double_Sided_Material()
{
	var scenenode = editorGetSelectedSceneNode();
	var material_count = ccbGetSceneNodeMaterialCount(scenenode);
	var Backface_culling = ccbGetSceneNodeMaterialProperty(scenenode, 0, "BackfaceCulling");
	
	for (i = 0; i < material_count; i++) { 
	if (Backface_culling == true)
		ccbSetSceneNodeMaterialProperty(scenenode,i, "BackfaceCulling", false);
	else ccbSetSceneNodeMaterialProperty(scenenode,i, "BackfaceCulling", true);
}
	
	ccbUpdateSceneNodeBoundingBox(scenenode);
	editorUpdateAllWindows();
}

//Toggle Anisotropic Filtering//
function Toggle_Anisotropic_Filter()
{
	var scenenode = editorGetSelectedSceneNode();
	var material_count = ccbGetSceneNodeMaterialCount(scenenode);
	var Anisotropic_Filter = ccbGetSceneNodeMaterialProperty(scenenode, 0, "AnisotropicFilter1");
	
	for (i = 0; i < material_count; i++) { 
	if (Anisotropic_Filter == false)
		{ccbSetSceneNodeMaterialProperty(scenenode,i, "AnisotropicFilter1", true);
		ccbSetSceneNodeMaterialProperty(scenenode,i, "AnisotropicFilter2", true);
		ccbSetSceneNodeMaterialProperty(scenenode,i, "AnisotropicFilter3", true);
		ccbSetSceneNodeMaterialProperty(scenenode,i, "AnisotropicFilter4", true);}

	else 
		{ccbSetSceneNodeMaterialProperty(scenenode,i, "AnisotropicFilter1", false);
		ccbSetSceneNodeMaterialProperty(scenenode,i, "AnisotropicFilter2", false);
		ccbSetSceneNodeMaterialProperty(scenenode,i, "AnisotropicFilter3", false);
		ccbSetSceneNodeMaterialProperty(scenenode,i, "AnisotropicFilter4", false);}
		 
}
	
	ccbUpdateSceneNodeBoundingBox(scenenode);
	editorUpdateAllWindows();
}
//AUTHOR: VAZAHAT PATHAN aka Just_in_Case.....
//Toggle Realtime Shadows//
function Toggle_Realtime_Shadows()
{
	var scenenode = ccbGetRootSceneNode();
	var Realtime_Shadows = ccbGetSceneNodeProperty(scenenode, "Realtime Shadows");
	 
	if (Realtime_Shadows == false)
		ccbSetSceneNodeProperty(scenenode, "Realtime Shadows", true);
	else ccbSetSceneNodeProperty(scenenode, "Realtime Shadows", false);

	editorUpdateAllWindows();
}

//Toggle Wind//
function Toggle_Wind()
{
	var scenenode = ccbGetRootSceneNode();
	var Wind = ccbGetSceneNodeProperty(scenenode, "Wind");
	 
	if (Wind == false)
		ccbSetSceneNodeProperty(scenenode, "Wind", true);
	else ccbSetSceneNodeProperty(scenenode, "Wind", false);

	editorUpdateAllWindows();
}

//Toggle Fog//
function Toggle_Fog()
{
	var scenenode = ccbGetRootSceneNode();
	var Fog = ccbGetSceneNodeProperty(scenenode, "Fog");
	 
	if (Fog == false)
		ccbSetSceneNodeProperty(scenenode, "Fog", true);
	else ccbSetSceneNodeProperty(scenenode, "Fog", false);

	editorUpdateAllWindows();
}

//Change Rotation of object on X-Axis//
function Change_Rotation_X_Axis()
{
	var scenenode = editorGetSelectedSceneNode();
	var Rotation = ccbGetSceneNodeProperty(scenenode, "Rotation");
	var Rotation_X = prompt("Insert the Value to Rotate the object on X-Axis",Rotation.x);

	ccbSetSceneNodeProperty(scenenode,"Rotation", Rotation_X,Rotation.y,Rotation.z);

	
	ccbUpdateSceneNodeBoundingBox(scenenode);
	editorUpdateAllWindows();
}

//Change Rotation of object on Y-Axis//
function Change_Rotation_Y_Axis()
{
	var scenenode = editorGetSelectedSceneNode();
	var Rotation = ccbGetSceneNodeProperty(scenenode, "Rotation");
	var Rotation_Y = prompt("Insert the Value to Rotate the object on Y-Axis",Rotation.y);

	ccbSetSceneNodeProperty(scenenode,"Rotation", Rotation.x,Rotation_Y,Rotation.z);

	
	ccbUpdateSceneNodeBoundingBox(scenenode);
	editorUpdateAllWindows();
}
//Change Rotation of object on Z-Axis//
function Change_Rotation_Z_Axis()
{
	var scenenode = editorGetSelectedSceneNode();
	var Rotation = ccbGetSceneNodeProperty(scenenode, "Rotation");
	var Rotation_Z = prompt("Insert the Value to Rotate the object on Z-Axis",Rotation.z);

	ccbSetSceneNodeProperty(scenenode,"Rotation", Rotation.x,Rotation.y,Rotation_Z);

	
	ccbUpdateSceneNodeBoundingBox(scenenode);
	editorUpdateAllWindows();
}

//Change Position of object on X-Axis//
function Change_Position_X_Axis()
{
	var scenenode = editorGetSelectedSceneNode();
	var Position = ccbGetSceneNodeProperty(scenenode, "Position");
	var Position_X = prompt("Insert the Value to Move the object on X-Axis",Position.x);

	ccbSetSceneNodeProperty(scenenode,"Position", Position_X,Position.y,Position.z);

	
	ccbUpdateSceneNodeBoundingBox(scenenode);
	editorUpdateAllWindows();
}

//Change Position of object on Y-Axis//
function Change_Position_Y_Axis()
{
	var scenenode = editorGetSelectedSceneNode();
	var Position = ccbGetSceneNodeProperty(scenenode, "Position");
	var Position_Y = prompt("Insert the Value to Move the object on Y-Axis",Position.y);

	ccbSetSceneNodeProperty(scenenode,"Position", Position.x,Position_Y,Position.z);

	
	ccbUpdateSceneNodeBoundingBox(scenenode);
	editorUpdateAllWindows();
}

//Change Position of object on Z-Axis//
function Change_Position_Z_Axis()
{
	var scenenode = editorGetSelectedSceneNode();
	var Position = ccbGetSceneNodeProperty(scenenode, "Position");
	var Position_Z = prompt("Insert the Value to Move the object on Z-Axis",Position.z);

	ccbSetSceneNodeProperty(scenenode,"Position", Position.x,Position.y,Position_Z);

	
	ccbUpdateSceneNodeBoundingBox(scenenode);
	editorUpdateAllWindows();
}

//Change Scale of object on X-Axis//
function Change_Scale_X_Axis()
{
	var scenenode = editorGetSelectedSceneNode();
	var Scale = ccbGetSceneNodeProperty(scenenode, "Scale");
	var Scale_X = prompt("Insert the Value to Scale the object on X-Axis",Scale.x);
	
	ccbSetSceneNodeProperty(scenenode,"Scale", Scale_X,Scale.y,Scale.z);

	
	ccbUpdateSceneNodeBoundingBox(scenenode);
	editorUpdateAllWindows();
}

//Change Scale of object on Y-Axis//
function Change_Scale_Y_Axis()
{
	var scenenode = editorGetSelectedSceneNode();
	var Scale = ccbGetSceneNodeProperty(scenenode, "Scale");
	var Scale_Y = prompt("Insert the Value to Scale the object on Y-Axis",Scale.y);

	ccbSetSceneNodeProperty(scenenode,"Scale", Scale.x,Scale_Y,Scale.z);

	
	ccbUpdateSceneNodeBoundingBox(scenenode);
	editorUpdateAllWindows();
}

//Change Scale of object on Z-Axis//
function Change_Scale_Z_Axis()
{
	var scenenode = editorGetSelectedSceneNode();
	var Scale = ccbGetSceneNodeProperty(scenenode, "Scale");
	var Scale_Z = prompt("Insert the Value to Scale the object on Z-Axis",Scale.z);

	ccbSetSceneNodeProperty(scenenode,"Scale", Scale.x,Scale.y,Scale_Z);

	
	ccbUpdateSceneNodeBoundingBox(scenenode);
	editorUpdateAllWindows();
}

//Change Scale of object on All-Axis//
function Change_Scale_All_Axis()
{
	var scenenode = editorGetSelectedSceneNode();
	var Scale = ccbGetSceneNodeProperty(scenenode, "Scale");
	var Scale_All = prompt("Insert the Value to Scale the object on All-Axis",1);

	ccbSetSceneNodeProperty(scenenode,"Scale", Scale_All,Scale_All,Scale_All);

	
	ccbUpdateSceneNodeBoundingBox(scenenode);
	editorUpdateAllWindows();
}

//Add_a_Cube//
function Add_a_Cube()
{
editorAddSceneNode("cube");
}

//Add_a_sphere//
function Add_a_Sphere()
{
editorAddSceneNode("sphere")
}

//Add_a_Plane//
function Add_a_Plane()
{
editorAddSceneNode("plane");
}

//Add_a_Cone//
function Add_a_Cone()
{
editorAddSceneNode("cone");
}

//Add_a_Cylinder//
function Add_a_Cylinder()
{
editorAddSceneNode("cylinder");
}

//Add_a_light//
function Add_a_Light()
{
editorAddSceneNode("light");
}

//Add_a_Camera//
function Add_a_Camera()
{
scenenode = editorAddSceneNode("camera");
ccbSetSceneNodeProperty(scenenode, "Active", true);
}

//Add_a_billboard//
function Add_a_Billboard()
{
editorAddSceneNode("billboard");
}

//Add_an_Overlay//
function Add_an_Overlay()
{
editorAddSceneNode("overlay2d");
}

//Add_a_Music//
function Add_Music()
{
editorAddSceneNode("3dsound");
}




editorRegisterMenuEntry("Add_a_Cube()", "Add Cube\tShift+C");
editorRegisterMenuEntry("Add_a_Sphere()", "Add Sphere\tShift+S");
editorRegisterMenuEntry("Add_a_Plane()", "Add plane\tShift+P");
editorRegisterMenuEntry("Add_a_Light()", "Add light\tShift+L");
editorRegisterMenuEntry("Add_a_Billboard()", "Add billboard\tShift+B");
editorRegisterMenuEntry("Add_a_Cone()", "Add Cone\tShift+Q");
editorRegisterMenuEntry("Add_a_Camera()", "Add Camera\tShift+W");
editorRegisterMenuEntry("Add_a_Cylinder()", "Add Cylinder\tShift+E");
editorRegisterMenuEntry("Add_an_Overlay()", "Add Overlay\tShift+O");
editorRegisterMenuEntry("Add_Music()", "Add Music\tShift+M");
editorRegisterMenuEntry("Switch_transparent_alpha_material()", "Switch to transparent Alpha material for the selected scenenode\tAlt+T");
editorRegisterMenuEntry("Switch_transparent_add_material()", "Switch to transparent Add material for the selected scenenode\tAlt+A");
editorRegisterMenuEntry("Switch_Solid_material()", "Switch to Solid material for the selected scenenode\tAlt+S");
editorRegisterMenuEntry("toggle_Dynamic_Lighting()", "Toggle Dynamic Lighting for the selected scenenode\tCtrl+Shift+L");
editorRegisterMenuEntry("Toggle_Wireframe()", "Toggle Wire-frame mode for the selected scenenode\tCtrl+W");
editorRegisterMenuEntry("Toggle_Double_Sided_Material()", "Toggle Double sided material for the selected scenenode\tCtrl+Shift+D");
editorRegisterMenuEntry("Toggle_Anisotropic_Filter()", "Toggle Anisotropic Filtering for the selected scenenode\tCtrl+Shift+A");
editorRegisterMenuEntry("Toggle_Realtime_Shadows()", "Toggle Realtime Shadows\tCtrl+Shift+S");
editorRegisterMenuEntry("Toggle_Wind()", "Toggle Wind\tCtrl+Shift+W");
editorRegisterMenuEntry("Toggle_Fog()", "Toggle Fog\tCtrl+Shift+F");
editorRegisterMenuEntry("Toggle_Visibility()", "Toggle Visibility for the selected scenenode\tCtrl+Shift+V");
editorRegisterMenuEntry("Toggle_Collision()", "Toggle Collision for the selected scenenode\tCtrl+Shift+C");
editorRegisterMenuEntry("Toggle_Occludes_Light()", "Toggle Occludes Light for the selected scenenode\tCtrl+Shift+O");
editorRegisterMenuEntry("Change_Rotation_X_Axis()", "Rotate selected scenenode to a value on X-Axis\tAlt+X");
editorRegisterMenuEntry("Change_Rotation_Y_Axis()", "Rotate selected scenenode to a value on Y-Axis\tAlt+Y");
editorRegisterMenuEntry("Change_Rotation_Z_Axis()", "Rotate selected scenenode to a value on Z-Axis\tAlt+Z");
editorRegisterMenuEntry("Change_Position_X_Axis()", "Move selected scenenode on to a value X-Axis\tShift+X");
editorRegisterMenuEntry("Change_Position_Y_Axis()", "Move selected scenenode on to a value Y-Axis\tShift+Y");
editorRegisterMenuEntry("Change_Position_Z_Axis()", "Move selected scenenode on to a value Z-Axis\tShift+Z");
editorRegisterMenuEntry("Change_Scale_X_Axis()", "Scale selected scenenode to a value on X-Axis\tCtrl+Shift+X");
editorRegisterMenuEntry("Change_Scale_Y_Axis()", "Scale selected scenenode to a value on Y-Axis\tCtrl+Shift+Y");
editorRegisterMenuEntry("Change_Scale_Z_Axis()", "Scale selected scenenode to a value on Z-Axis\tCtrl+Shift+Z");
editorRegisterMenuEntry("Change_Scale_All_Axis()", "Scale selected scenenode to a value on All-Axis\tCtrl+Shift+A");


//AUTHOR: VAZAHAT PATHAN aka Just_in_Case.....
