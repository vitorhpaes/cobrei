export default {
    jwt: {
        secret: process.env.JWT_SECRET ?? 'secret-not-sent',
        expiresIn: '7d',
    },
}
