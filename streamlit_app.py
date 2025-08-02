import streamlit as st


# Beolvassuk a HTML fájlt
with open("main.html", "r", encoding="utf-8") as f:
    html_content = f.read()

# Megjelenítjük a Streamlit appban
st.components.v1.html(html_content, height=800, scrolling=True)

st.title("Hello Streamlit-er 👋")
st.markdown(
    """ 
    This is a playground for you to try Streamlit and have fun. 

    **There's :rainbow[so much] you can build!**
    
    We prepared a few examples for you to get started. Just 
    click on the buttons above and discover what you can do 
    with Streamlit. 
    """
)

if st.button("Send balloons!"):
    st.balloons()
