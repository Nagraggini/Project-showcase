from js import document


def get_checked_value(name):
    radios = document.getElementsByName(name)
    for r in radios:
        if r.checked:
            return int(r.value)
    return None


def sort_me(event):
    Gryffindor = Ravenclaw = Hufflepuff = Slytherin = 0

    a1 = get_checked_value("q1")
    a2 = get_checked_value("q2")
    a3 = get_checked_value("q3")

    if a1 is None or a2 is None or a3 is None:
        document.getElementById("output").innerHTML = "⚠ Please answer all questions!"
        return

    # Q1
    if a1 == 1:
        Gryffindor += 1
        Ravenclaw += 1
    elif a1 == 2:
        Hufflepuff += 1
        Slytherin += 1

    # Q2
    if a2 == 1:
        Hufflepuff += 2
    elif a2 == 2:
        Slytherin += 2
    elif a2 == 3:
        Ravenclaw += 2
    elif a2 == 4:
        Gryffindor += 2

    # Q3
    if a3 == 1:
        Slytherin += 4
    elif a3 == 2:
        Hufflepuff += 4
    elif a3 == 3:
        Ravenclaw += 4
    elif a3 == 4:
        Gryffindor += 2

    result = f"""
    🦁 Gryffindor: {Gryffindor}<br>
    🦅 Ravenclaw: {Ravenclaw}<br>
    🦡 Hufflepuff: {Hufflepuff}<br>
    🐍 Slytherin: {Slytherin}
    """
    document.getElementById("output").innerHTML = result

    print(result)


# gomb esemény hozzárendelés
btn = document.getElementById("btn")
btn.addEventListener("click", sort_me)
