const { Slots } = require('discord-gamecord');

module.exports = {
    name: "slots",
    aliases: "slot",
    category: "Games",
    description: "Jogue uma partida de slots",
    ownerOnly: false,
    run: async (client, message) => {
        // Inicie o jogo de slots
        const slotGame = new Slots({
            message: message,
            isSlashGame: false, // Configuração para comandos não slash
            embed: {
                title: 'Slot Machine',
                color: client.config.embedColor
            },
            slots: ['🍇', '🍉', '🍓']
        });

        try {
            await slotGame.startGame();
        } catch (error) {
            console.error('Error starting the slot game:', error);
        }
    }
};