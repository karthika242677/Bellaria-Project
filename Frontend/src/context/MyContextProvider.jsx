import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const url = "http://localhost:5000";
const navigate=useNavigate("")

  const [productData, setProductData] = useState([]);   // ✅ backend products
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [input, setInput] = useState("");
    const [open1, setOpen1] = useState(false);


  // ✅ Persist wishlist
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Persist cart
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [wishlist, cart]);

  // ✅ Fetch Backend Products
  const FetchProductData = async () => {
    try {
      const res = await axios.get(`${url}/product/products`);
      setProductData(res.data);
      setFilteredProducts(res.data); // show all products first
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    FetchProductData();
  }, []);

  // ✅ Filter by Category
  const filterProducts = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setFilteredProducts(productData);
    } else {
      setFilteredProducts(
        productData.filter(
          (p) => p.category?.toLowerCase() === category.toLowerCase()
        )
      );
    }
  };

  // ✅ Sort by Price
  const sortProducts = (order) => {
    const sorted = [...filteredProducts].sort((a, b) => {
      const priceA = parseFloat(a.price.replace("₹", ""));
      const priceB = parseFloat(b.price.replace("₹", ""));
      return order === "lowToHigh" ? priceA - priceB : priceB - priceA;
    });
    setFilteredProducts(sorted);
  };

  // ✅ Search function
  const searchFun = () => {
    const searched = productData.filter((product) =>
      product.type.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredProducts(searched);
  };

  // ✅ Wishlist (using backend _id)
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (!prev.find((p) => p._id === product._id)) return [...prev, product];
      return prev;
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((p) => p._id !== id));
  };

  // ✅ Cart (using backend _id)
  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((p) => p._id === product._id);
      if (exist) {
        return prev.map((p) =>
          p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p._id !== id));
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const RegisterSubmitFun = async (e) => {
    try {
      e.preventDefault();
      const formData = { username, password, email }
      console.log(formData)
      await axios.post(`${url}/user/add`, formData);
      alert("Register Successfully");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

   const LoginSubmitFun = async (e) => {
    try{
      e.preventDefault()

      var loginData = {
        username : loginUsername , 
        password : loginPassword
      }

      localStorage.setItem("username" , loginUsername)

      await axios.post(`${url}/user/login` , loginData)
      alert("Login Successfull!")
      navigate("/home")
    }
    catch(err){
      console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
  }

  const LogoutFun = () => {
    localStorage.removeItem("username");
        navigate("/")

    alert("Logout Successful!");
  };

  // ✅ Context Values
  const ContextValue = {
    productData,
    selectedCategory,
    filterProducts,
    filteredProducts,
    sortProducts,
    input,
    setInput,
    searchFun,
    wishlist,
    addToWishlist,
    removeFromWishlist,
    cart,
    addToCart,
    removeFromCart,
    navigate,
    open1,
    setOpen1,

    username,
    setUsername,
    password,
    setPassword,
    email,
    setEmail,
    RegisterSubmitFun,

    loginUsername,
    setLoginUsername,
    loginPassword,
    setLoginPassword,
    LoginSubmitFun,
    LogoutFun,
  };

  return (
    <MyContext.Provider value={ContextValue}>{children}</MyContext.Provider>
  );
};

export default MyContextProvider;
