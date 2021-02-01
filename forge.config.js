module.exports = {
    makers: [
        {
            name: '@electron-forge/maker-dmg',
            config: {
                icon: 'logo.icns'
            }
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {
                options: {
                    name: 'whitebear',
                    productName: 'WhiteBear',
                    icon: 'logo.png'
                }
            }
        },
        {
            name: '@electron-forge/maker-deb',
            config: {
                options: {
                    name: 'whitebear',
                    productName: 'WhiteBear',
                    icon: 'logo.png'
                }
            }
        },
        {
            name: '@electron-forge/maker-wix',
            config: {
                description: 'WhiteBear client',
                exe: 'whitebear.exe',
                language: 1042,
                manufacturer: 'Team int',
                name: 'WhiteBear',
                ui: {
                    chooseDirectory: true
                }
            }
        },
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                name: 'whitebear',
                exe: 'whitebear.exe',
                setupIcon: 'logo.ico',
                setupExe: 'WhiteBearSetup.exe'
            }
        }
    ],
    packagerConfig: {
        name: 'WhiteBear',
        executableName: 'whitebear',
        icon: 'logo'
    }
}
