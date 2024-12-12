
'''Read Txt File'''
def read_text(filename):
    with open(filename, 'r') as file:
        text = file.read()

    return text