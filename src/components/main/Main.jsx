import './styles.css';
import Grid from '../grid/Grid';
import Gallery from '../gallery/Gallery';

function Main() {
  return (
    <main>
        <div className='chat'><i className="fa-regular fa-message"></i></div>
        <section className="hero">
            {/* <Navbar /> */}
            
            <img  src='https://www.aesop.com/u1nb1km7t5q7/36xhghl86KuVQKLj50bTeC/57b54009d6af1daf2ac570615ad0223d/Aesop_Bar_Soaps_2023_Web_Homepage_2_Primary_Full_Bleed_Mobile_640x640px.jpg' />
            
            <div className='content'>
                <div className='logo'>A<span className='specialE'>e</span>sop</div>
                <div className='info'>
                    <h3>Bar Soaps</h3>
                    <h2>A body care classic, reimagined</h2>
                    <p>Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits.</p>
                    <button className='btn-outline'>Discover Bar Soaps <i className="fa-solid fa-arrow-right"></i></button>
                </div>  
            </div>   
        </section>

        <Gallery 
                info={{ subheading: 'For the body', heading: 'An expression of care', para: 'Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.', button: 'See all Body Care'}}
                products={bodyCareProducts}
            />

        <Grid
            subheading='The Athenaeum'
            heading='The warm-up'
            para='In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months.'
            button='Read more'
            images={['https://www.aesop.com/u1nb1km7t5q7/6JgoxaY07ELbLnt8ZA13Ci/9b4af6dd71f15a3614c9f0cde35c6cb6/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Mobile_640x360px.jpg']}
            align='left'
        />

        <Gallery
            info={{ subheading: 'For the skin', heading: 'Attention for all types', para: 'The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.', button: 'See all Skin Care'}}
            products={skinCareProducts}
            classes='skincare'
        />

        <Grid align='right'
            images={['https://www.aesop.com/u1nb1km7t5q7/6m4yuIyUcyfXMyKT17ZYsr/9bc9ba78322632d97323d73f364113f0/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Desktop_2560x1540px.png']}
            subheading=''
            heading='Post-Poo drops has returned'
            para='Here to make the malodorous melodious once again. Dispense this favoured formulation into the toilet bowl after flushing to effectively mask disagreeable odours.'
            button='Discover Post-Poo Drops'
        />

        <Gallery
            info={{ subheading: 'For the home', heading: 'Domestic pleasures', para: 'Our range of aromatic formulations for the home are practical and pleasing in equal measure.', button: 'See all Homes'}}
            products={domesticProducts}
            classes='domestic'
        />

        <Grid align='left'
            images={store}
            subheading=''
            heading='Store locator'
            para='Our consultants are available to host you in-store and provide tailored guidance on gift purchases.'
            button='Find a nearby store'
            bottomLine='Aesop Fashion Walk'
        />

        <div className='quote'>
            <p>‘Life never becomes a habit to me. It's always a marvel.’</p>
            <h4>Katherine Mansfield</h4>
        </div>
    </main>
  )
}

export default Main;

const bodyCareProducts = [
    {
        image: 'https://www.aesop.com/u1nb1km7t5q7/19Ww037s29aXMKzpBYsDx1/7637bd27642bd4e0345e77d23dbe99f1/Aesop_Body_Nurture_Bar_Soap_150g_Web_Front_Small_700x425px.png',
        heading: 'Nurture Bar Soap',
        subheading: 'Offers a mild yet effective cleanse'
    },
    {
        image: 'https://www.aesop.com/u1nb1km7t5q7/2gYLQ9uOz20lp9Br2EsOhC/31bbefce348d0d5a1530fb2eb781ccf3/Aesop_Body_Polish_Bar_Soap_150g_Web_Front_Small_700x425px.png',
        heading: 'Polish Bar Soap',
        subheading: 'Thoroughly cleanses and exfoliates skin'
    },
    {
        image: 'https://www.aesop.com/u1nb1km7t5q7/6W45mQCSsbN1OZ9OBPRye0/b0ce9f7fcb1477bd00c6f750a20d14e0/Aesop_Body_Refresh_Bar_Soap_150g_Web_Front_Small_700x425px.png',
        heading: 'Refresh Bar Soap',
        subheading: 'Offers a thoroughly and enlivening cleanse'
    },
];

const skinCareProducts = [
    {
        image: 'https://www.aesop.com/u1nb1km7t5q7/1sLt2FekomlBRwXrD7V7a9/5617742b33b0a86608dc2b3c5f42c0ac/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Small_373x364px.png',
        heading: 'Lucient Facial Concentrate',
        subheading: 'A vitamin C layering serun'
    },
    {
        image: 'https://www.aesop.com/u1nb1km7t5q7/4DGsDcDdfO5dcxxkckH0Vz/ff15e75ea0734ffa3273513bda5a40d2/Aesop_Skin_Purifying_Facial_Cream_Cleanser_100mL_Web_Large_843x1000px.png',
        heading: 'Purifying Facial Cream Cleanser',
        subheading: 'A daily cream cleanser for dry skin'
    },
    {
        image: 'https://www.aesop.com/u1nb1km7t5q7/6MqehE3s9kxUep4iIs3caA/e1539c8d62f0c8bc5fdb1074d8bb2ecc/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-small.png',
        heading: 'Camellia Nut Facial Hydrating Cream',
        subheading: 'For normal, dry or sensitive skin'
    },
    {
        image: 'https://www.aesop.com/u1nb1km7t5q7/6GyHPwuGxCWpuwpLLfUrST/152aa97837838aac183a693970206e78/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Small_491x261px.png',
        heading: 'Parsley Seed Anti-Oxidant Eye Cream',
        subheading: 'Nourishes delicate skin around eyes'
    },
    {
        image: 'https://www.aesop.com/u1nb1km7t5q7/4dVpfb5CoZ6FSNuyaMeOpI/b2efd1fa172860c42b9aa66b4a68953a/Aesop_Skin_B_Triple_C_Facial_Balancing_Gel_60mL_Web_Small_491x261px.png',
        heading: 'B Triple C Facial Balancing Gel',
        subheading: 'Anti-oxidant gel infused with Vitamin B and C'
    },
    {
        image: 'https://www.aesop.com/u1nb1km7t5q7/5jIHFQRz6dLkkJTBWg0Rza/be4427bcf7967b4b54d0300bfda6c2ed/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-small.png',
        heading: 'Mandarin Facial Hydrating Cream',
        subheading: 'Rapidly absorbed, lightly hydrating'
    },
    {
        image: 'https://www.aesop.com/u1nb1km7t5q7/1sLt2FekomlBRwXrD7V7a9/5617742b33b0a86608dc2b3c5f42c0ac/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Small_373x364px.png',
        heading: 'Parsley Seed Anti-Oxidant Intense Serum',
        subheading: 'A hydrating serum to bolster skin'
    },
    {
        image: 'https://www.aesop.com/u1nb1km7t5q7/4HrBYcgSDjvQslgwbxCcT2/54e4767e91993e87faa8c8847d993e69/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-small.png',
        heading: 'Parsley Seed Facial Cleanser',
        subheading: 'For those in polluted urban environments'
    },
]

const domesticProducts = [
    {
        image: 'https://www.aesop.com/u1nb1km7t5q7/5Vdr9g5qwCGUE2UmBCU0nO/9612cebb87bd252bee061e666e4d88d2/Aesop_Home_Post-Poo_Drops_100mL_Web_Small_426x434px.png',
        heading: 'Post-Poo Drops',
        subheading: 'A botanical bathroom deodoriser'
    },
    {
        image: 'https://www.aesop.com/u1nb1km7t5q7/7bOo4W1EMDrJN3J6WEAHjB/373f3b7cea0168fe23641fedd1565e22/Aesop_Home_Aganice_Aromatique_Candle_Web_Small_602x524px.png',
        heading: 'Aganice Aromatique Candle',
        subheading: 'Cardamom, Mimosa, Tobacco',
    },
    {
        image: 'https://www.aesop.com/u1nb1km7t5q7/7bOo4W1EMDrJN3J6WEAHjB/373f3b7cea0168fe23641fedd1565e22/Aesop_Home_Aganice_Aromatique_Candle_Web_Small_602x524px.png',
        heading: 'Ptolemy Aromatique Candle',
        subheading: 'A sensuous blend of leather, smoke and wood',
    },
    {
        image: 'https://www.aesop.com/u1nb1km7t5q7/7bOo4W1EMDrJN3J6WEAHjB/373f3b7cea0168fe23641fedd1565e22/Aesop_Home_Aganice_Aromatique_Candle_Web_Small_602x524px.png',
        heading: 'Callippus Aromatique Candle',
        subheading: 'A marriage of deep greens and earthy spices',
    },
    {
        image: 'https://www.aesop.com/u1nb1km7t5q7/65lAzP9UcNy1U6PWv0L2UZ/57fe63f5ca34033b7bf549fe19280dae/Aesop_Home_Bronze_Incense_Holder_Web_Small_627x262px.png',
        heading: 'Bronze Incense Holder',
        subheading: 'Suited to any interior'
    },
    {
        image: 'https://www.aesop.com/u1nb1km7t5q7/6ZWdd6jy3H6C0N12FMBoWl/cb5902e68e3e138327cb94580f35f694/Aesop_Home_Murasaki_Aromatique_Incense_Web_Small_863x754px.png',
        heading: 'Murasaki Aromatique Incense',
        subheading: 'For those who favour aromas of warm spice'
    },
]

const store = ['https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg',
'https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg',
'https://www.aesop.com/u1nb1km7t5q7/iC1baQuIzXXC6Ho3lZSFW/1226a07142e70fec26df3f0b72578cbd/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg'];