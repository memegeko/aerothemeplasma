install(
    DIRECTORY
        ${CMAKE_SOURCE_DIR}/plasma/desktoptheme/Aero7
        ${CMAKE_SOURCE_DIR}/plasma/desktoptheme/Seven-Black
    DESTINATION ${CMAKE_INSTALL_PREFIX}/share/plasma/desktoptheme
)

# Plasma selects a compositing-specific dialog surface when blur or contrast
# is active.  Install the same light Aero frame for every variant so context
# menus never fall back to Breeze's dark translucent asset.
foreach(dialog_variant opaque solid translucent)
    install(
        FILES ${CMAKE_SOURCE_DIR}/plasma/desktoptheme/Aero7/dialogs/background.svg
        DESTINATION ${CMAKE_INSTALL_PREFIX}/share/plasma/desktoptheme/Aero7/${dialog_variant}/dialogs
    )
endforeach()
