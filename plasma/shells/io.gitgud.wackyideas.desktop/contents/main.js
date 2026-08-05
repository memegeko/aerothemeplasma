
loadTemplate("io.gitgud.wackyideas.taskbar")

var desktopsArray = desktopsForActivity(currentActivity());
for( var j = 0; j < desktopsArray.length; j++) {
    desktopsArray[j].wallpaperPlugin = 'org.kde.image';
    desktopsArray[j].currentConfigGroup = ["Wallpaper", "org.kde.image", "General"];
    desktopsArray[j].writeConfig("Image", "file:///usr/share/wallpapers/Aero7ShellDefault/contents/images/1672x941.png");
    desktopsArray[j].writeConfig("PreviewImage", "file:///usr/share/wallpapers/Aero7ShellDefault/contents/images/1672x941.png");
    //var clock = desktopsArray[j].addWidget("org.kde.plasma.analogclock");
}
