class MeliWebServices {

    getMenuDepartments() {
        return cy.request({
            method: 'GET',
            url: 'https://www.mercadolibre.com.ar/menu/departments',
            headers: {
                'Authority': 'www.mercadolibre.com.ar',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7'
            }
        })      
    }

}
export const meliPage = new MeliWebServices();
