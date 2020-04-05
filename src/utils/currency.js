export const currencyToPtBR = value => (new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' })
        .format(value));