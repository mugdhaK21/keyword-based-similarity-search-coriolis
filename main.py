import math
import nltk
import os
from flask import Flask, jsonify, request
from nltk.corpus import reuters
from collections import defaultdict
from nltk.corpus import stopwords

nltk.download('punkt')
nltk.download('stopwords')
nltk.download('reuters')

app = Flask(__name__)

# Step 1: Collect the corpus
corpus = reuters.fileids()
corpus = [reuters.raw(fileid) for fileid in corpus]

# Step 2: Preprocess the documents
def preprocess(text):
    # Tokenize the text into words
    words = nltk.word_tokenize(text.lower())

    # Remove stop words and punctuation
    words = [word for word in words if word.isalnum() and not word in stopwords.words('english')]

    # Stem the words
