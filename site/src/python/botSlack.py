from http import client
from slack_sdk import WebClient

client = WebClient('xoxb-4066476532949-4054938047735-aBIjZL2k0KLsnlgZ1kBVFKRo')

response = client.chat_postMessage(channel = 'C0423SFGN9J', text= 'Hello world!')

print(response)