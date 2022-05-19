import React from 'react'

const Categories = () => {
    const data = [
        {
            cateImg:"https://www.seekpng.com/png/small/131-1310880_cloth-dress-fashion-women-tunics-frock-comments-dress.png",
            cateName:"Fashion",
        },
        {
            cateImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRibaMqGGVsyDuno7bGsrN9DS1ZDWSZkihzLw&usqp=CAU",
            cateName:"Electronic",
        },
        {
            cateImg:"http://cdn.onlinewebfonts.com/svg/img_22967.png",
            cateName:"Cars",
        },
        {
            cateImg:"https://media.istockphoto.com/vectors/cute-bear-coloring-page-vector-illustration-vector-id1266295992?b=1&k=20&m=1266295992&s=170667a&w=0&h=rTnzn-JzqLQc9ONYRGFtvIAYnv_2oRPp6YyLDurtYEg=",
            cateName:"Home & Garden",
        },
        {
            cateImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI9xtrM8ILO4N0Qs5vUvjwuYUT4Or4d_BnLg&usqp=CAU",
            cateName:"Gifts",
        },
        {
            cateImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4FQCP-TJEgRgKHGy8NR0BNFUYET_EMFENg&usqp=CAU",
            cateName:"Music",
        },
        {
            cateImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYHCliwjqkBD10v5CAvaU-JPMsZxm2Xal_A&usqp=CAU",
            cateName:"Health & Beauty",
        },
        {
            cateImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJ7ZLgvuqS3jbD-CnVMgWk_7Hkzxc67bWZg&usqp=CAU",
            cateName:"Pets",
        },
        {
            cateImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-5nvXJLS46S3nH2PRe59IuGM8FbMNtf2kw&usqp=CAU",
            cateName:"Baby Toys",
        },
        {
            cateImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeSZI74xy-2HY7X_FfgFqWM_xZlX--tzDgCQ&usqp=CAU",
            cateName:"Groceries",
        },
        {
            cateImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQFeViYTjhHjVaD3LVGvk0bLnozowz2hVtUw&usqp=CAU",
            cateName:"Books",
        }
    ]
  return (
    <>
      <div className="category">
          {
              data.map((value,index) =>{
                  return (
                      <div className="box f_flex" key={index}>
                          <img src={value.cateImg} alt=''/>
                          <span>{value.cateName}</span>
                      </div>
                  )
              })
          }
      </div>
    </>
  )
}

export default Categories
