 const bancos = [
    {
      "code": 1,
      "bank": "Banco Do Brasil S.A (BB)"
    },
    {
      "code": 237,
      "bank": "Bradesco S.A."
    },
    {
      "code": 335,
      "bank": "Banco Digio S.A."
    },
    {
      "code": 260,
      "bank": "Nu Pagamentos S.A (Nubank)"
    },
    {
      "code": 290,
      "bank": "PagSeguro Internet S.A."
    },
    {
      "code": 323,
      "bank": "Mercado Pago – Conta Do Mercado Livre"
    },
    {
      "code": 237,
      "bank": "Next Bank (Mesmo Código Do Bradesco)"
    },
    {
      "code": 637,
      "bank": "Banco Sofisa S.A (Sofisa Direto)"
    },
    {
      "code": 77,
      "bank": "Banco Inter S.A."
    },
    {
      "code": 341,
      "bank": "Itaú Unibanco S.A."
    },
    {
      "code": 104,
      "bank": "Caixa Econômica Federal (CEF)"
    },
    {
      "code": 33,
      "bank": "Banco Santander Brasil S.A."
    },
    {
      "code": 212,
      "bank": "Banco Original S.A."
    },
    {
      "code": 756,
      "bank": "Bancoob – Banco Cooperativo Do Brasil S.A."
    },
    {
      "code": 655,
      "bank": "Banco Votorantim S.A."
    },
    {
      "code": 655,
      "bank": "Neon Pagamentos S.A (Memso Código Do Banco Votorantim)"
    },
    {
      "code": 41,
      "bank": "Banrisul – Banco Do Estado Do Rio Grande Do Sul S.A."
    },
    {
      "code": 389,
      "bank": "Banco Mercantil Do Brasil S.A."
    },
    {
      "code": 422,
      "bank": "Banco Safra S.A."
    },
    {
      "code": 70,
      "bank": "BRB – Banco De Brasília S.A."
    },
    {
      "code": 136,
      "bank": "Unicred Cooperativa LTDA"
    },
    {
      "code": 741,
      "bank": "Banco Ribeirão Preto S.A."
    },
    {
      "code": 739,
      "bank": "Banco Cetelem S.A."
    },
    {
      "code": 743,
      "bank": "Banco Semear S.A."
    },
    {
      "code": 100,
      "bank": "Planner Corretora De Valores S.A."
    },
    {
      "code": 96,
      "bank": "Banco B3 S.A."
    },
    {
      "code": 747,
      "bank": "Banco Rabobank Internacional Do Brasil S.A."
    },
    {
      "code": 748,
      "bank": "Banco Cooperativa Sicredi S.A."
    },
    {
      "code": 752,
      "bank": "Banco BNP Paribas Brasil S.A."
    },
    {
      "code": 91,
      "bank": "Unicred Central Rs"
    },
    {
      "code": 399,
      "bank": "Kirton Bank S.A. – Banco Múltiplo"
    },
    {
      "code": 108,
      "bank": "Portocred S.A."
    },
    {
      "code": 757,
      "bank": "Banco Keb Hana Do Brasil S.A."
    },
    {
      "code": 102,
      "bank": "XP Investimentos S.A."
    },
    {
      "code": 348,
      "bank": "Banco XP S/A"
    },
    {
      "code": 340,
      "bank": "Super Pagamentos S/A (Superdital)"
    },
    {
      "code": 84,
      "bank": "Uniprime Norte Do Paraná"
    },
    {
      "code": 180,
      "bank": "Cm Capital Markets Cctvm Ltda"
    },
    {
      "code": 66,
      "bank": "Banco Morgan Stanley S.A."
    },
    {
      "code": 15,
      "bank": "UBS Brasil Cctvm S.A."
    },
    {
      "code": 143,
      "bank": "Treviso Cc S.A."
    },
    {
      "code": 62,
      "bank": "Hipercard Banco Múltiplo S.A."
    },
    {
      "code": 74,
      "bank": "Banco J. Safra S.A."
    },
    {
      "code": 99,
      "bank": "Uniprime Central Ccc Ltda"
    },
    {
      "code": 25,
      "bank": "Banco Alfa S.A."
    },
    {
      "code": 75,
      "bank": "Bco Abn Amro S.A."
    },
    {
      "code": 40,
      "bank": "Banco Cargill S.A."
    },
    {
      "code": 190,
      "bank": "Servicoop"
    },
    {
      "code": 63,
      "bank": "Banco Bradescard"
    },
    {
      "code": 191,
      "bank": "Nova Futura Ctvm Ltda"
    },
    {
      "code": 64,
      "bank": "Goldman Sachs Do Brasil Bm S.A."
    },
    {
      "code": 97,
      "bank": "Ccc Noroeste Brasileiro Ltda"
    },
    {
      "code": 16,
      "bank": "Ccm Desp Trâns Sc E Rs"
    },
    {
      "code": 12,
      "bank": "Banco Inbursa"
    },
    {
      "code": 3,
      "bank": "Banco Da Amazônia S.A."
    },
    {
      "code": 60,
      "bank": "Confidence Cc S.A."
    },
    {
      "code": 37,
      "bank": "Banco Do Estado Do Pará S.A."
    },
    {
      "code": 159,
      "bank": "Casa do Crédito S.A."
    },
    {
      "code": 172,
      "bank": "Albatross Ccv S.A."
    },
    {
      "code": 85,
      "bank": "Cooperativa Central de Créditos – Ailos"
    },
    {
      "code": 114,
      "bank": "Central Cooperativa De Crédito no Estado do Espírito Santo"
    },
    {
      "code": 36,
      "bank": "Banco Bradesco BBI S.A."
    },
    {
      "code": 394,
      "bank": "Banco Bradesco Financiamentos S.A."
    },
    {
      "code": 4,
      "bank": "Banco Do Nordeste Do Brasil S.A."
    },
    {
      "code": 320,
      "bank": "China Construction Bank – Ccb Brasil S.A."
    },
    {
      "code": 189,
      "bank": "Hs Financeira"
    },
    {
      "code": 105,
      "bank": "Lecca Cfi S.A."
    },
    {
      "code": 76,
      "bank": "Banco KDB Brasil S.A."
    },
    {
      "code": 82,
      "bank": "Banco Topázio S.A."
    },
    {
      "code": 286,
      "bank": "Cooperativa de Crédito Rural de De Ouro"
    },
    {
      "code": 93,
      "bank": "PóloCred Scmepp Ltda"
    },
    {
      "code": 273,
      "bank": "Ccr De São Miguel Do Oeste"
    },
    {
      "code": 157,
      "bank": "Icap Do Brasil Ctvm Ltda"
    },
    {
      "code": 183,
      "bank": "Socred S.A."
    },
    {
      "code": 14,
      "bank": "Natixis Brasil S.A."
    },
    {
      "code": 130,
      "bank": "Caruana Scfi"
    },
    {
      "code": 127,
      "bank": "Codepe Cvc S.A."
    },
    {
      "code": 79,
      "bank": "Banco Original Do Agronegócio S.A."
    },
    {
      "code": 81,
      "bank": "Bbn Banco Brasileiro De Negocios S.A."
    },
    {
      "code": 118,
      "bank": "Standard Chartered Bi S.A."
    },
    {
      "code": 133,
      "bank": "Cresol Confederação"
    },
    {
      "code": 121,
      "bank": "Banco Agibank S.A."
    },
    {
      "code": 83,
      "bank": "Banco Da China Brasil S.A."
    },
    {
      "code": 138,
      "bank": "Get Money Cc Ltda"
    },
    {
      "code": 24,
      "bank": "Banco Bandepe S.A."
    },
    {
      "code": 95,
      "bank": "Banco Confidence De Câmbio S.A."
    },
    {
      "code": 94,
      "bank": "Banco Finaxis"
    },
    {
      "code": 276,
      "bank": "Senff S.A."
    },
    {
      "code": 137,
      "bank": "Multimoney Cc Ltda"
    },
    {
      "code": 92,
      "bank": "BRK S.A."
    },
    {
      "code": 47,
      "bank": "Banco do Estado de Sergipe S.A."
    },
    {
      "code": 144,
      "bank": "Bexs Banco De Cambio S.A."
    },
    {
      "code": 126,
      "bank": "BR Partners Banco de Investimento S.A."
    },
    {
      "code": 301,
      "bank": "BPP Instituição De Pagamentos S.A."
    },
    {
      "code": 173,
      "bank": "BRL Trust Dtvm Sa"
    },
    {
      "code": 119,
      "bank": "Banco Western Union do Brasil S.A."
    },
    {
      "code": 254,
      "bank": "Paraná Banco S.A."
    },
    {
      "code": 268,
      "bank": "Barigui Companhia Hipotecária"
    },
    {
      "code": 107,
      "bank": "Banco Bocom BBM S.A."
    },
    {
      "code": 412,
      "bank": "Banco Capital S.A."
    },
    {
      "code": 124,
      "bank": "Banco Woori Bank Do Brasil S.A."
    },
    {
      "code": 149,
      "bank": "Facta S.A. Cfi"
    },
    {
      "code": 197,
      "bank": "Stone Pagamentos S.A."
    },
    {
      "code": 142,
      "bank": "Broker Brasil Cc Ltda"
    },
    {
      "code": 389,
      "bank": "Banco Mercantil Do Brasil S.A."
    },
    {
      "code": 184,
      "bank": "Banco Itaú BBA S.A."
    },
    {
      "code": 634,
      "bank": "Banco Triangulo S.A (Banco Triângulo)"
    },
    {
      "code": 545,
      "bank": "Senso Ccvm S.A."
    },
    {
      "code": 132,
      "bank": "ICBC do Brasil Bm S.A."
    },
    {
      "code": 298,
      "bank": "Vip’s Cc Ltda"
    },
    {
      "code": 129,
      "bank": "UBS Brasil Bi S.A."
    },
    {
      "code": 128,
      "bank": "Ms Bank S.A Banco De Câmbio"
    },
    {
      "code": 194,
      "bank": "Parmetal Dtvm Ltda"
    },
    {
      "code": 310,
      "bank": "VORTX Dtvm Ltda"
    },
    {
      "code": 163,
      "bank": "Commerzbank Brasil S.A Banco Múltiplo"
    },
    {
      "code": 280,
      "bank": "Avista S.A."
    },
    {
      "code": 146,
      "bank": "Guitta Cc Ltda"
    },
    {
      "code": 279,
      "bank": "Ccr De Primavera Do Leste"
    },
    {
      "code": 182,
      "bank": "Dacasa Financeira S/A"
    },
    {
      "code": 278,
      "bank": "Genial Investimentos Cvm S.A."
    },
    {
      "code": 271,
      "bank": "Ib Cctvm Ltda"
    },
    {
      "code": 21,
      "bank": "Banco Banestes S.A."
    },
    {
      "code": 246,
      "bank": "Banco Abc Brasil S.A."
    },
    {
      "code": 751,
      "bank": "Scotiabank Brasil"
    },
    {
      "code": 208,
      "bank": "Banco BTG Pactual S.A."
    },
    {
      "code": 746,
      "bank": "Banco Modal S.A."
    },
    {
      "code": 241,
      "bank": "Banco Classico S.A."
    },
    {
      "code": 612,
      "bank": "Banco Guanabara S.A."
    },
    {
      "code": 604,
      "bank": "Banco Industrial Do Brasil S.A."
    },
    {
      "code": 505,
      "bank": "Banco Credit Suisse (Brl) S.A."
    },
    {
      "code": 196,
      "bank": "Banco Fair Cc S.A."
    },
    {
      "code": 300,
      "bank": "Banco La Nacion Argentina"
    },
    {
      "code": 477,
      "bank": "Citibank N.A."
    },
    {
      "code": 266,
      "bank": "Banco Cedula S.A."
    },
    {
      "code": 122,
      "bank": "Banco Bradesco BERJ S.A."
    },
    {
      "code": 376,
      "bank": "Banco J.P. Morgan S.A."
    },
    {
      "code": 473,
      "bank": "Banco Caixa Geral Brasil S.A."
    },
    {
      "code": 745,
      "bank": "Banco Citibank S.A."
    },
    {
      "code": 120,
      "bank": "Banco Rodobens S.A."
    },
    {
      "code": 265,
      "bank": "Banco Fator S.A."
    },
    {
      "code": 7,
      "bank": "BNDES (Banco Nacional Do Desenvolvimento Social)"
    },
    {
      "code": 188,
      "bank": "Ativa S.A Investimentos"
    },
    {
      "code": 134,
      "bank": "BGC Liquidez Dtvm Ltda"
    },
    {
      "code": 641,
      "bank": "Banco Alvorada S.A."
    },
    {
      "code": 29,
      "bank": "Banco Itaú Consignado S.A."
    },
    {
      "code": 243,
      "bank": "Banco Máxima S.A."
    },
    {
      "code": 78,
      "bank": "Haitong Bi Do Brasil S.A."
    },
    {
      "code": 111,
      "bank": "Banco Oliveira Trust Dtvm S.A."
    },
    {
      "code": 17,
      "bank": "Bny Mellon Banco S.A."
    },
    {
      "code": 174,
      "bank": "Pernambucanas Financ S.A."
    },
    {
      "code": 495,
      "bank": "La Provincia Buenos Aires Banco"
    },
    {
      "code": 125,
      "bank": "Brasil Plural S.A Banco"
    },
    {
      "code": 488,
      "bank": "Jpmorgan Chase Bank"
    },
    {
      "code": 65,
      "bank": "Banco Andbank S.A."
    },
    {
      "code": 492,
      "bank": "Ing Bank N.V."
    },
    {
      "code": 250,
      "bank": "Banco Bcv"
    },
    {
      "code": 145,
      "bank": "Levycam Ccv Ltda"
    },
    {
      "code": 494,
      "bank": "Banco Rep Oriental Uruguay"
    },
    {
      "code": 253,
      "bank": "Bexs Cc S.A."
    },
    {
      "code": 269,
      "bank": "Hsbc Banco De Investimento"
    },
    {
      "code": 213,
      "bank": "Bco Arbi S.A."
    },
    {
      "code": 139,
      "bank": "Intesa Sanpaolo Brasil S.A."
    },
    {
      "code": 18,
      "bank": "Banco Tricury S.A."
    },
    {
      "code": 630,
      "bank": "Banco Intercap S.A."
    },
    {
      "code": 224,
      "bank": "Banco Fibra S.A."
    },
    {
      "code": 600,
      "bank": "Banco Luso Brasileiro S.A."
    },
    {
      "code": 623,
      "bank": "Banco Pan S.A."
    },
    {
      "code": 204,
      "bank": "Banco Bradesco Cartoes S.A."
    },
    {
      "code": 479,
      "bank": "Banco ItauBank S.A."
    },
    {
      "code": 456,
      "bank": "Banco MUFG Brasil S.A."
    },
    {
      "code": 464,
      "bank": "Banco Sumitomo Mitsui Brasil S.A."
    },
    {
      "code": 613,
      "bank": "Omni Banco S.A."
    },
    {
      "code": 652,
      "bank": "Itaú Unibanco Holding Bm S.A."
    },
    {
      "code": 653,
      "bank": "Banco Indusval S.A."
    },
    {
      "code": 69,
      "bank": "Banco Crefisa S.A."
    },
    {
      "code": 370,
      "bank": "Banco Mizuho S.A."
    },
    {
      "code": 249,
      "bank": "Banco Investcred Unibanco S.A."
    },
    {
      "code": 318,
      "bank": "Banco BMG S.A."
    },
    {
      "code": 626,
      "bank": "Banco Ficsa S.A."
    },
    {
      "code": 270,
      "bank": "Sagitur Cc Ltda"
    },
    {
      "code": 366,
      "bank": "Banco Societe Generale Brasil"
    },
    {
      "code": 113,
      "bank": "Magliano S.A."
    },
    {
      "code": 131,
      "bank": "Tullett Prebon Brasil Cvc Ltda"
    },
    {
      "code": 11,
      "bank": "C.Suisse Hedging-Griffo Cv S.A (Credit Suisse)"
    },
    {
      "code": 611,
      "bank": "Banco Paulista"
    },
    {
      "code": 755,
      "bank": "Bofa Merrill Lynch Bm S.A."
    },
    {
      "code": 89,
      "bank": "Ccr Reg Mogiana"
    },
    {
      "code": 643,
      "bank": "Banco Pine S.A."
    },
    {
      "code": 140,
      "bank": "Easynvest – Título Cv S.A."
    },
    {
      "code": 707,
      "bank": "Banco Daycoval S.A."
    },
    {
      "code": 288,
      "bank": "Carol Dtvm Ltda"
    },
    {
      "code": 101,
      "bank": "Renascença Dtvm Ltda"
    },
    {
      "code": 487,
      "bank": "Deutsche Bank S.A (Banco Alemão)"
    },
    {
      "code": 233,
      "bank": "Banco Cifra S.A."
    },
    {
      "code": 177,
      "bank": "Guide Investimentos S.A. Corretora de Valores"
    },
    {
      "code": 633,
      "bank": "Banco Rendimento S.A."
    },
    {
      "code": 218,
      "bank": "Banco Bs2 S.A."
    },
    {
      "code": 292,
      "bank": "BS2 Distribuidora De Títulos E Investimentos"
    },
    {
      "code": 169,
      "bank": "Banco Olé Bonsucesso Consignado S.A."
    },
    {
      "code": 293,
      "bank": "Lastro Rdv Dtvm Ltda"
    },
    {
      "code": 285,
      "bank": "Frente Cc Ltda"
    },
    {
      "code": 80,
      "bank": "B&T Cc Ltda"
    },
    {
      "code": 753,
      "bank": "Novo Banco Continental S.A Bm"
    },
    {
      "code": 222,
      "bank": "Banco Crédit Agricole Br S.A."
    },
    {
      "code": 754,
      "bank": "Banco Sistema S.A."
    },
    {
      "code": 98,
      "bank": "Credialiança Ccr"
    },
    {
      "code": 610,
      "bank": "Banco VR S.A."
    },
    {
      "code": 712,
      "bank": "Banco Ourinvest S.A."
    },
    {
      "code": 10,
      "bank": "CREDICOAMO CRÉDITO RURAL COOPERATIVA"
    },
    {
      "code": 283,
      "bank": "RB Capital Investimentos Dtvm Ltda"
    },
    {
      "code": 217,
      "bank": "Banco John Deere S.A."
    },
    {
      "code": 117,
      "bank": "Advanced Cc Ltda"
    },
    {
      "code": 336,
      "bank": "Banco C6 S.A – C6 Bank"
    },
    {
      "code": 654,
      "bank": "Banco A.J. Renner S.A."
    },
    {
      "code": null,
      "bank": "Banco Central do Brasil – Selic"
    },
    {
      "code": null,
      "bank": "Banco Central do Brasil"
    },
    {
      "code": 272,
      "bank": "AGK Corretora de Câmbio S.A."
    },
    {
      "code": null,
      "bank": "Secretaria do Tesouro Nacional – STN"
    },
    {
      "code": 330,
      "bank": "Banco Bari de Investimentos e Financiamentos S.A."
    },
    {
      "code": 362,
      "bank": "CIELO S.A."
    },
    {
      "code": 322,
      "bank": "Cooperativa de Crédito Rural de Abelardo Luz – Sulcredi/Crediluz"
    },
    {
      "code": 350,
      "bank": "Cooperativa De Crédito Rural De Pequenos Agricultores E Da Reforma Agrária Do Ce"
    },
    {
      "code": 91,
      "bank": "Central De Cooperativas De Economia E Crédito Mútuo Do Estado Do Rio Grande Do S"
    },
    {
      "code": 379,
      "bank": "COOPERFORTE – Cooperativa De Economia E Crédito Mútuo Dos Funcionários De Instit"
    },
    {
      "code": 378,
      "bank": "BBC LEASING S.A. – Arrendamento Mercantil"
    },
    {
      "code": 360,
      "bank": "TRINUS Capital Distribuidora De Títulos E Valores Mobiliários S.A."
    },
    {
      "code": 84,
      "bank": "UNIPRIME NORTE DO PARANÁ – COOPERATIVA DE CRÉDITO LTDA"
    },
    {
      "code": null,
      "bank": "Câmara Interbancária de Pagamentos – CIP – LDL"
    },
    {
      "code": 387,
      "bank": "Banco Toyota do Brasil S.A."
    },
    {
      "code": 326,
      "bank": "PARATI – CRÉDITO, FINANCIAMENTO E INVESTIMENTO S.A."
    },
    {
      "code": 315,
      "bank": "PI Distribuidora de Títulos e Valores Mobiliários S.A."
    },
    {
      "code": 307,
      "bank": "Terra Investimentos Distribuidora de Títulos e Valores Mobiliários Ltda."
    },
    {
      "code": 296,
      "bank": "VISION S.A. CORRETORA DE CAMBIO"
    },
    {
      "code": 382,
      "bank": "FIDÚCIA SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORTE L"
    },
    {
      "code": 97,
      "bank": "Credisis – Central de Cooperativas de Crédito Ltda."
    },
    {
      "code": 16,
      "bank": "COOPERATIVA DE CRÉDITO MÚTUO DOS DESPACHANTES DE TRÂNSITO DE SANTA CATARINA E RI"
    },
    {
      "code": 299,
      "bank": "SOROCRED CRÉDITO, FINANCIAMENTO E INVESTIMENTO S.A."
    },
    {
      "code": 359,
      "bank": "ZEMA CRÉDITO, FINANCIAMENTO E INVESTIMENTO S/A"
    },
    {
      "code": 391,
      "bank": "COOPERATIVA DE CRÉDITO RURAL DE IBIAM – SULCREDI/IBIAM"
    },
    {
      "code": 368,
      "bank": "Banco CSF S.A."
    },
    {
      "code": 259,
      "bank": "MONEYCORP BANCO DE CÂMBIO S.A."
    },
    {
      "code": 364,
      "bank": "GERENCIANET S.A."
    },
    {
      "code": 14,
      "bank": "STATE STREET BRASIL S.A. – BANCO COMERCIAL"
    },
    {
      "code": 81,
      "bank": "Banco Seguro S.A."
    },
    {
      "code": 384,
      "bank": "GLOBAL FINANÇAS SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO"
    },
    {
      "code": 88,
      "bank": "BANCO RANDON S.A."
    },
    {
      "code": 319,
      "bank": "OM DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA"
    },
    {
      "code": 274,
      "bank": "MONEY PLUS SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E A EMPRESA DE PEQUENO PORT"
    },
    {
      "code": 95,
      "bank": "Travelex Banco de Câmbio S.A."
    },
    {
      "code": 332,
      "bank": "Acesso Soluções de Pagamento S.A."
    },
    {
      "code": 325,
      "bank": "Órama Distribuidora de Títulos e Valores Mobiliários S.A."
    },
    {
      "code": 331,
      "bank": "Fram Capital Distribuidora de Títulos e Valores Mobiliários S.A."
    },
    {
      "code": 396,
      "bank": "HUB PAGAMENTOS S.A."
    },
    {
      "code": 309,
      "bank": "CAMBIONET CORRETORA DE CÂMBIO LTDA."
    },
    {
      "code": 313,
      "bank": "AMAZÔNIA CORRETORA DE CÂMBIO LTDA."
    },
    {
      "code": 377,
      "bank": "MS SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORTE LTDA"
    },
    {
      "code": 321,
      "bank": "CREFAZ SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E A EMPRESA DE PEQUENO PORTE LT"
    },
    {
      "code": 383,
      "bank": "BOLETOBANCÁRIO.COM TECNOLOGIA DE PAGAMENTOS LTDA."
    },
    {
      "code": 324,
      "bank": "CARTOS SOCIEDADE DE CRÉDITO DIRETO S.A."
    },
    {
      "code": 380,
      "bank": "PICPAY SERVICOS S.A."
    },
    {
      "code": 343,
      "bank": "FFA SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORTE LTDA."
    },
    {
      "code": 349,
      "bank": "AL5 S.A. CRÉDITO, FINANCIAMENTO E INVESTIMENTO"
    },
    {
      "code": 374,
      "bank": "REALIZE CRÉDITO, FINANCIAMENTO E INVESTIMENTO S.A."
    },
    {
      "code": null,
      "bank": "B3 SA – Brasil, Bolsa, Balcão – Segmento Cetip UTVM"
    },
    {
      "code": null,
      "bank": "Câmara Interbancária de Pagamentos – CIP C3"
    },
    {
      "code": 352,
      "bank": "TORO CORRETORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA"
    },
    {
      "code": 329,
      "bank": "QI Sociedade de Crédito Direto S.A."
    },
    {
      "code": 342,
      "bank": "Creditas Sociedade de Crédito Direto S.A."
    },
    {
      "code": 397,
      "bank": "LISTO SOCIEDADE DE CRÉDITO DIRETO S.A."
    },
    {
      "code": 355,
      "bank": "ÓTIMO SOCIEDADE DE CRÉDITO DIRETO S.A."
    },
    {
      "code": 367,
      "bank": "VITREO DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS S.A."
    },
    {
      "code": 373,
      "bank": "UP.P SOCIEDADE DE EMPRÉSTIMO ENTRE PESSOAS S.A."
    },
    {
      "code": 408,
      "bank": "BÔNUSCRED SOCIEDADE DE CRÉDITO DIRETO S.A."
    },
    {
      "code": 404,
      "bank": "SUMUP SOCIEDADE DE CRÉDITO DIRETO S.A."
    },
    {
      "code": 403,
      "bank": "CORA SOCIEDADE DE CRÉDITO DIRETO S.A."
    },
    {
      "code": 306,
      "bank": "PORTOPAR DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA."
    },
    {
      "code": 174,
      "bank": "PEFISA S.A. – CRÉDITO, FINANCIAMENTO E INVESTIMENTO"
    },
    {
      "code": 354,
      "bank": "NECTON INVESTIMENTOS S.A. CORRETORA DE VALORES MOBILIÁRIOS E COMMODITIES"
    },
    {
      "code": null,
      "bank": "BMF Bovespa S.A. – Bolsa de Valores, Mercadorias e Futuros – Camara BMFBOVESPA"
    },
    {
      "code": 630,
      "bank": "Banco Smartbank S.A."
    },
    {
      "code": 393,
      "bank": "Banco Volkswagen S.A."
    },
    {
      "code": 390,
      "bank": "BANCO GM S.A."
    },
    {
      "code": 381,
      "bank": "BANCO MERCEDES-BENZ DO BRASIL S.A."
    },
    {
      "code": 626,
      "bank": "BANCO C6 CONSIGNADO S.A."
    },
    {
      "code": 755,
      "bank": "Bank of America Merrill Lynch Banco Múltiplo S.A."
    },
    {
      "code": 89,
      "bank": "CREDISAN COOPERATIVA DE CRÉDITO"
    },
    {
      "code": 363,
      "bank": "SOCOPA SOCIEDADE CORRETORA PAULISTA S.A."
    },
    {
      "code": 365,
      "bank": "SOLIDUS S.A. CORRETORA DE CAMBIO E VALORES MOBILIARIOS"
    },
    {
      "code": 281,
      "bank": "Cooperativa de Crédito Rural Coopavel"
    },
    {
      "code": 654,
      "bank": "BANCO DIGIMAIS S.A."
    },
    {
      "code": 371,
      "bank": "WARREN CORRETORA DE VALORES MOBILIÁRIOS E CÂMBIO LTDA."
    },
    {
      "code": 289,
      "bank": "DECYSEO CORRETORA DE CAMBIO LTDA."
    }
  ]

const nomeDoBanco = document.getElementById('nome_do_banco');
const numeroDaAgencia = document.getElementById('numero_da_agencia');

function PreencherSelect(bancos) {
    bancos.forEach(banco => {
        const option = document.createElement('option');
        option.value = banco.bank; 
        option.textContent = banco.bank; 
        nomeDoBanco.appendChild(option);
    });
}



PreencherSelect(bancos);