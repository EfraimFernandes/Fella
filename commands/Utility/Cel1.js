module.exports = {
    name: "c1",
    aliases: ["C11"],
    category: "Bot",
    description: "Verificar a Célula1",
    ownerOnly: false,
    run: async (client, message) => {
        const msg = await message.channel.send(`👾`);
        const pingEmbed = new client.discord.EmbedBuilder()
            .setTitle('🤖')
            .setColor(client.config.embedColor)
        await message.reply({ embeds: [pingEmbed], allowedMentions: { repliedUser: false } });
        msg.delete();
    },
};
