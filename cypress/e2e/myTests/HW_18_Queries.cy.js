

describe('Header elements test', () => {
    beforeEach(() => {
    cy.visit('/')
    });

    it('Hillel button in the header', () => {
        // cy.get('.header_left').as('selector');
        const selector = ('.header_left');
        cy.get(selector).find('.header_logo').should ('be.visible');
        cy.get (selector).should ('have.class', 'header_left d-flex align-items-center');

    });
    
    it('Home button in the header', () => {
        const selector = ('.header_left');
        cy.get(selector).find('a').contains ('Home').should ('be.visible');
    });

    it('About button in the header', () => {
        const selector = ('.header_left');
        cy.get(selector).children ('nav').contains ('About');
        cy.contains ('About').click();
    });
    it('Contacts button in the header', () => {
        cy.get('nav').children ().filter('button').contains ('Contacts');

});
});

describe('footer elements test', () => {
    beforeEach(() => {
    cy.visit('/')
    });

    it('Facebook icon in the header', () => {
        cy.get('.socials_icon').eq(0).should('be.visible');
        cy.get('.socials_icon').first();
        
    });
    it('Telegram icon in the header', () => {
        cy.get('.socials_icon').eq(1).invoke ('attr', 'class').should ('contains', 'socials_icon');
        cy.get('.socials_icon').first();
        
    });
    it('ItHillel.ua icon', () => {
        cy.get('.contacts_link').invoke ('text'). then ((text) => {
            cy.log ('Hi from Yana' + text);
        cy.wrap (text). should ('contains', 'hillel');
            
        });

});
});