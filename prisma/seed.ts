import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  /**  await prisma.user.create({
        data:{
            email: "endayalance@yahoo.com",
            username: "sneakingslayer",
            firstname: "Lance",
            lastname: "Endaya",
            password: "oohaw123",
            role: "Admin"
        }
    })
    await prisma.category.create({
        data:{
            name: "Computer Accessories"
        }
    })
    */

  await prisma.product.createMany({
    data: [
      {
        name: "BULLPACK Tumbler 10L",
        price: "4999",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "651e346f-95c2-4a22-af75-df1dedb13ed3",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192419/westore/will-breen-pRW8jdVMxt4-unsplash_uoxjiq.jpg",
      },
      {
        name: "Vulca Beauty Essentials V2",
        price: "999",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "fef36c08-37ff-453f-b8b2-93b7986a08fa",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192419/westore/reuben-mansell-nwOip8AOZz0-unsplash_hbtwyd.jpg",
      },
      {
        name: "Dove Cebu de Macho",
        price: "299",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "fef36c08-37ff-453f-b8b2-93b7986a08fa",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192419/westore/shardar-tarikul-islam-tIQ2t64FKy8-unsplash_twn6lw.jpg",
      },
      {
        name: "Tracov Facial Wash Pack",
        price: "549",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "fef36c08-37ff-453f-b8b2-93b7986a08fa",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192419/westore/valeriia-miller-_42NKYROG7g-unsplash_wrnpv4.jpg",
      },
      {
        name: "WESTORE MEN'S WATCH 2022",
        price: "1249",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "651e346f-95c2-4a22-af75-df1dedb13ed3",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192419/westore/rachit-tank-2cFZ_FB08UM-unsplash_zmlchp.jpg",
      },
      {
        name: "WOMEN'S FACIAL CARE ROUTINE",
        price: "999",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "fef36c08-37ff-453f-b8b2-93b7986a08fa",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192418/westore/pmv-chamara-MEsWk-dZzlI-unsplash_jh3wri.jpg",
      },
      {
        name: "KJ's Armpit Care Deodorant",
        price: "199",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "fef36c08-37ff-453f-b8b2-93b7986a08fa",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192418/westore/mathilde-langevin-baKm-5z7ikk-unsplash_zzxwd5.jpg",
      },
      {
        name: "Men's Hipster Clothing Starter Pack 2022",
        price: "1999",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "5988ca66-dcbf-4e1e-9393-f06a3dc851b5",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192418/westore/nordwood-themes-Nv4QHkTVEaI-unsplash_q7rpr2.jpg",
      },
      {
        name: "Women's Travel Essentials Package",
        price: "4999",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "5988ca66-dcbf-4e1e-9393-f06a3dc851b5",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192418/westore/marissa-grootes-D4jRahaUaIc-unsplash_gmlhfu.jpg",
      },
      {
        name: "Peach Sunblock SPF 20",
        price: "99",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "fef36c08-37ff-453f-b8b2-93b7986a08fa",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192418/westore/lina-verovaya-F39Yk-FM_fg-unsplash_d8wmvx.jpg",
      },
      {
        name: "Crab Red Lipstick",
        price: "299",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "fef36c08-37ff-453f-b8b2-93b7986a08fa",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192418/westore/laura-chouette-dcbz31jdsHA-unsplash-min_e2k1jj.jpg",
      },
      {
        name: "Ear OIL Tiki Tiki",
        price: "699",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "fef36c08-37ff-453f-b8b2-93b7986a08fa",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192418/westore/kadarius-seegars-Mxy5gokl8mE-unsplash-min_x8hdsw.jpg",
      },
      {
        name: "COCO CHANEL 2022",
        price: "9999",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "fef36c08-37ff-453f-b8b2-93b7986a08fa",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192417/westore/laura-chouette-_ODRA1MPL1I-unsplash-min_ypgare.jpg",
      },
      {
        name: "LT Leather Toes",
        price: "4999",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "ac44507e-3aa4-4161-85fa-89e9c2cc155f",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192417/westore/irene-kredenets-KStSiM1UvPw-unsplash-min_dsexb2.jpg",
      },
      {
        name: "Apple Starter kit Pack",
        price: "99000",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "f01be168-d461-498e-87cb-a37b21d4afb9",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192417/westore/julian-o-hayon-Bs-zngH79Ds-unsplash-min_yt609k.jpg",
      },
      {
        name: "JZ Smooth Kicks",
        price: "2999",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "ac44507e-3aa4-4161-85fa-89e9c2cc155f",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192417/westore/irene-kredenets-dwKiHoqqxk8-unsplash-min_dzcyw2.jpg",
      },
      {
        name: "SONY WX100 Bass BOOSTED",
        price: "5999",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "f01be168-d461-498e-87cb-a37b21d4afb9",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192417/westore/c-d-x-PDX_a_82obo-unsplash-min_ltrndb.jpg",
      },
      {
        name: "Coffee Tea CHARCOAL",
        price: "499",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "902da02d-a340-46c9-b9a9-05e7b1e6f79d",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192417/westore/d-l-samuels-lvIIWY4DWR0-unsplash-min_zt8xp2.jpg",
      },
      {
        name: "KETTLE TEA JP",
        price: "799",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "902da02d-a340-46c9-b9a9-05e7b1e6f79d",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192417/westore/hearted-co-94308nAliWU-unsplash-min_mlx6dl.jpg",
      },
      {
        name: "Curology Creamer",
        price: "999",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "fef36c08-37ff-453f-b8b2-93b7986a08fa",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192416/westore/curology-DGH1u80sZik-unsplash-min_e00lno.jpg",
      },
      {
        name: "BIKE Hyper Boost",
        price: "12999",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "ac44507e-3aa4-4161-85fa-89e9c2cc155f",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192416/westore/imani-bahati-LxVxPA1LOVM-unsplash-min_ptne27.jpg",
      },
      {
        name: "All Natural Peanut OIL",
        price: "129",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sem imperdiet, tincidunt arcu quis, luctus nulla. Praesent pharetra nulla nisi, nec mattis sapien gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: "100",
        categoryId: "fef36c08-37ff-453f-b8b2-93b7986a08fa",
        image:
          "https://res.cloudinary.com/westore/image/upload/v1648192416/westore/alex-lvrs-mTw_GePuRUE-unsplash-min_iqtpxx.jpg",
      },
    ],
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
