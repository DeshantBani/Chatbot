from query_model import QueryModel
from rag_app.query_rag import query_rag


def handler(event, context):
    query_item = QueryModel(**event)
    invoke_rag(query_item)


def invoke_rag(query_item: QueryModel):
    rag_response = query_rag(query_item.query_text)
    query_item.answer_text = rag_response.response_text
    query_item.sources = rag_response.sources
    query_item.is_complete = True
    query_item.put_item()
    print(f"✅ Item is updated: {query_item}")
    return query_item

if __name__ == "__main__":
    # For local testing.
    main()
