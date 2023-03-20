import { json } from '@sveltejs/kit';
import { building } from '$app/environment';

export const GET = async ({ request, platform }) => {
	let a = json(JSON.stringify({result: {data:[]}}))
	if(!building) {
		const CURRENCY = platform.env.CURRENCY; //from NameSpace
		if(CURRENCY) a = json(await CURRENCY?.get("all"))
	}
    return a
};

// await CURRENCY.put("all", JSON.stringify({
	// 	"result": {
	// 	  "data": [
	// 		{
	// 		  "c": "ARS",
	// 		  "n": "Argentine Peso",
	// 		  "v": "202.018951"
	// 		},
	// 		{
	// 		  "c": "AUD",
	// 		  "n": "Australian Dollar",
	// 		  "v": "1.505400"
	// 		},
	// 		{
	// 		  "c": "BHD",
	// 		  "n": "Bahraini Dinar",
	// 		  "v": "0.376000"
	// 		},
	// 		{
	// 		  "c": "BWP",
	// 		  "n": "Botswana Pula",
	// 		  "v": "13.261811"
	// 		},
	// 		{
	// 		  "c": "BRL",
	// 		  "n": "Brazilian Real",
	// 		  "v": "5.301153"
	// 		},
	// 		{
	// 		  "c": "GBP",
	// 		  "n": "British Pound",
	// 		  "v": "0.827917"
	// 		},
	// 		{
	// 		  "c": "BND",
	// 		  "n": "Bruneian Dollar",
	// 		  "v": "1.350317"
	// 		},
	// 		{
	// 		  "c": "BGN",
	// 		  "n": "Bulgarian Lev",
	// 		  "v": "1.849495"
	// 		},
	// 		{
	// 		  "c": "CAD",
	// 		  "n": "Canadian Dollar",
	// 		  "v": "1.375992"
	// 		},
	// 		{
	// 		  "c": "CLP",
	// 		  "n": "Chilean Peso",
	// 		  "v": "815.549656"
	// 		},
	// 		{
	// 		  "c": "CNY",
	// 		  "n": "Chinese Yuan Renminbi",
	// 		  "v": "6.904676"
	// 		},
	// 		{
	// 		  "c": "COP",
	// 		  "n": "Colombian Peso",
	// 		  "v": "4738.449930"
	// 		},
	// 		{
	// 		  "c": "CZK",
	// 		  "n": "Czech Koruna",
	// 		  "v": "22.611328"
	// 		},
	// 		{
	// 		  "c": "DKK",
	// 		  "n": "Danish Krone",
	// 		  "v": "7.039995"
	// 		},
	// 		{
	// 		  "c": "AED",
	// 		  "n": "Emirati Dirham",
	// 		  "v": "3.672500"
	// 		},
	// 		{
	// 		  "c": "EUR",
	// 		  "n": "Euro",
	// 		  "v": "0.945632"
	// 		},
	// 		{
	// 		  "c": "HKD",
	// 		  "n": "Hong Kong Dollar",
	// 		  "v": "7.848303"
	// 		},
	// 		{
	// 		  "c": "HUF",
	// 		  "n": "Hungarian Forint",
	// 		  "v": "375.474722"
	// 		},
	// 		{
	// 		  "c": "ISK",
	// 		  "n": "Icelandic Krona",
	// 		  "v": "142.137367"
	// 		},
	// 		{
	// 		  "c": "INR",
	// 		  "n": "Indian Rupee",
	// 		  "v": "82.788041"
	// 		},
	// 		{
	// 		  "c": "IDR",
	// 		  "n": "Indonesian Rupiah",
	// 		  "v": "15494.902943"
	// 		},
	// 		{
	// 		  "c": "IRR",
	// 		  "n": "Iranian Rial",
	// 		  "v": "42141.171338"
	// 		},
	// 		{
	// 		  "c": "ILS",
	// 		  "n": "Israeli Shekel",
	// 		  "v": "3.640144"
	// 		},
	// 		{
	// 		  "c": "JPY",
	// 		  "n": "Japanese Yen",
	// 		  "v": "133.042206"
	// 		},
	// 		{
	// 		  "c": "KZT",
	// 		  "n": "Kazakhstani Tenge",
	// 		  "v": "464.120795"
	// 		},
	// 		{
	// 		  "c": "KWD",
	// 		  "n": "Kuwaiti Dinar",
	// 		  "v": "0.306853"
	// 		},
	// 		{
	// 		  "c": "LYD",
	// 		  "n": "Libyan Dinar",
	// 		  "v": "4.806873"
	// 		},
	// 		{
	// 		  "c": "MYR",
	// 		  "n": "Malaysian Ringgit",
	// 		  "v": "4.483077"
	// 		},
	// 		{
	// 		  "c": "MUR",
	// 		  "n": "Mauritian Rupee",
	// 		  "v": "46.814831"
	// 		},
	// 		{
	// 		  "c": "MXN",
	// 		  "n": "Mexican Peso",
	// 		  "v": "18.967374"
	// 		},
	// 		{
	// 		  "c": "NPR",
	// 		  "n": "Nepalese Rupee",
	// 		  "v": "132.522956"
	// 		},
	// 		{
	// 		  "c": "NZD",
	// 		  "n": "New Zealand Dollar",
	// 		  "v": "1.613884"
	// 		},
	// 		{
	// 		  "c": "NOK",
	// 		  "n": "Norwegian Krone",
	// 		  "v": "10.722623"
	// 		},
	// 		{
	// 		  "c": "OMR",
	// 		  "n": "Omani Rial",
	// 		  "v": "0.384984"
	// 		},
	// 		{
	// 		  "c": "PKR",
	// 		  "n": "Pakistani Rupee",
	// 		  "v": "282.776937"
	// 		},
	// 		{
	// 		  "c": "PHP",
	// 		  "n": "Philippine Peso",
	// 		  "v": "55.066043"
	// 		},
	// 		{
	// 		  "c": "PLN",
	// 		  "n": "Polish Zloty",
	// 		  "v": "4.454163"
	// 		},
	// 		{
	// 		  "c": "QAR",
	// 		  "n": "Qatari Riyal",
	// 		  "v": "3.640000"
	// 		},
	// 		{
	// 		  "c": "RON",
	// 		  "n": "Romanian New Leu",
	// 		  "v": "4.654403"
	// 		},
	// 		{
	// 		  "c": "RUB",
	// 		  "n": "Russian Ruble",
	// 		  "v": "75.827899"
	// 		},
	// 		{
	// 		  "c": "SAR",
	// 		  "n": "Saudi Arabian Riyal",
	// 		  "v": "3.750000"
	// 		},
	// 		{
	// 		  "c": "SGD",
	// 		  "n": "Singapore Dollar",
	// 		  "v": "1.350317"
	// 		},
	// 		{
	// 		  "c": "ZAR",
	// 		  "n": "South African Rand",
	// 		  "v": "18.338883"
	// 		},
	// 		{
	// 		  "c": "KRW",
	// 		  "n": "South Korean Won",
	// 		  "v": "1320.460436"
	// 		},
	// 		{
	// 		  "c": "LKR",
	// 		  "n": "Sri Lankan Rupee",
	// 		  "v": "337.699319"
	// 		},
	// 		{
	// 		  "c": "SEK",
	// 		  "n": "Swedish Krona",
	// 		  "v": "10.611168"
	// 		},
	// 		{
	// 		  "c": "CHF",
	// 		  "n": "Swiss Franc",
	// 		  "v": "0.921319"
	// 		},
	// 		{
	// 		  "c": "TWD",
	// 		  "n": "Taiwan New Dollar",
	// 		  "v": "30.759526"
	// 		},
	// 		{
	// 		  "c": "THB",
	// 		  "n": "Thai Baht",
	// 		  "v": "34.679711"
	// 		},
	// 		{
	// 		  "c": "TTD",
	// 		  "n": "Trinidadian Dollar",
	// 		  "v": "6.780040"
	// 		},
	// 		{
	// 		  "c": "TRY",
	// 		  "n": "Turkish Lira",
	// 		  "v": "18.983146"
	// 		},
	// 		{
	// 		  "c": "USD",
	// 		  "n": "US Dollar",
	// 		  "v": "1"
	// 		},
	// 		{
	// 		  "c": "VEF",
	// 		  "n": "Venezuelan Bolivar",
	// 		  "v": "2406314.431234"
	// 		}
	// 	  ],
	// 	  "last_modified": 1678883277111
	// 	}
	//   }), {
	// 	metadata: { someMetadataKey: 'someMetadataValue' }
	// });