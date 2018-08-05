const URL_API = 'https://5b664ca59daa3f0014cb8e7c.mockapi.io/';

export class AccountService {
    static create(account) {
        return fetch(URL_API + 'account', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(account)
        });
    }
}